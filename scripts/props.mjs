// Reads prop metadata from the *published* type declarations, not TREDS source.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import docgen from 'react-docgen-typescript';

const COMPONENTS = JSON.parse(readFileSync('src/components.json', 'utf8')).map((c) => c.name);

// Coverage: every component the package exports should have a page. Sub-parts (TableRow,
// AccordionItem…) belong to their parent's page; icons have their own gallery.
const NOT_PAGES = ['ThemeProvider'];
const dts = readFileSync('node_modules/@tampere/treds/dist/index.d.ts', 'utf8');
const exportedAll = dts
  .match(/^export \{ ([^}]+) \};$/m)[1]
  .split(', ')
  .filter((n) => /^[A-Z]/.test(n) && !n.endsWith('Icon') && !NOT_PAGES.includes(n));
const SUBPARTS = exportedAll.filter((n) => COMPONENTS.some((c) => n !== c && n.startsWith(c)));
const exported = exportedAll.filter((n) => !SUBPARTS.includes(n));
for (const name of exported.filter((n) => !COMPONENTS.includes(n))) {
  console.warn(
    `coverage: ${name} is exported by @tampere/treds but missing from src/components.json`
  );
}

// The published d.ts carries no defaults (#179), so they are listed here, in the same quoted
// form react-docgen would report from source.
const DEFAULTS = {
  Button: { variant: "'primary'", radius: "'sharp'", iconOnly: 'false', disabled: 'false' },
  TextLink: {
    size: "'p1'",
    visited: 'false',
    openExternal: 'false',
    openExternalLabel: "' (avautuu uuteen välilehteen)'",
  },
  Badge: { inverted: 'false', showIcon: 'false' },
  Chip: { disabled: 'false' },
  TextField: { showSearchIcon: 'false', showClearButton: 'false' },
  NavigationLink: { isSelected: 'false', variant: "'default'", size: "'md'" },
  SkipLink: { href: "'#main-content'", children: "'Hyppää pääsisältöön'" },
  Paper: {
    background: "'default'",
    radius: "'sharp'",
    withBorder: 'false',
    borderColor: "'divider'",
    withShadow: 'true',
    padding: "'md'",
  },
  Card: { size: "'lg'", background: "'default'", mediaPlacement: "'top'" },
  Linkbox: {
    mediaPlacement: "'top'",
    inverted: 'false',
    external: 'false',
    externalLabel: "'(avautuu uuteen välilehteen)'",
  },
  Accordion: { transitionDuration: '0' },
  Pagination: { maxVisiblePages: '5' },
};

const parser = docgen.withCustomConfig('tsconfig.json', {
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  savePropValueAsString: true,
  // Keep a prop if TREDS declares it at all. Filtering on `parent` alone drops `variant`,
  // which Mantine's BoxProps also declares.
  propFilter: (prop) =>
    prop.name === 'children' ||
    (prop.declarations ?? []).some((d) => d.fileName.includes('@tampere/treds')),
});

// One component per parse: parsing the whole bundled index.d.ts at once cross-wires
// same-named props between components (TextLink got Card's `size`, Chip got Badge's `icon`).
// react-docgen skips components the d.ts declares as an arrow-typed const, so those are
// retyped as FC of their own props.
const stub = 'scripts/.props-stub.tsx';
const docs = [...COMPONENTS, ...SUBPARTS].flatMap((name) => {
  writeFileSync(stub, `export { ${name} } from '@tampere/treds';\n`);
  const direct = parser.parse(stub);
  if (direct.some((d) => d.displayName === name)) return direct;
  writeFileSync(
    stub,
    `import type { ComponentProps, FC } from 'react';\n` +
      `import { ${name} as C } from '@tampere/treds';\n` +
      `export const ${name}: FC<ComponentProps<typeof C>> = C;\n`
  );
  return parser.parse(stub);
});
rmSync(stub);
const found = Object.fromEntries(
  docs
    .filter((d) => COMPONENTS.includes(d.displayName) || SUBPARTS.includes(d.displayName))
    .map((d) => [d.displayName, d])
);

mkdirSync('src/generated', { recursive: true });
for (const name of [...COMPONENTS, ...SUBPARTS]) {
  if (!found[name]) {
    console.warn(`props: ${name}: no props could be read, its page links to Storybook instead`);
    continue;
  }
  const props = Object.values(found[name].props).map(
    ({ name: propName, type, required, description, defaultValue, tags }) => ({
      name: propName,
      type: type.raw ?? type.name,
      values: type.name === 'enum' ? type.value.map((v) => JSON.parse(v.value)) : undefined,
      required,
      description,
      defaultValue: DEFAULTS[name]?.[propName] ?? defaultValue?.value ?? tags?.default,
    })
  );
  writeFileSync(`src/generated/${name}.props.json`, JSON.stringify(props, null, 2) + '\n');
  console.log(`props: ${name} → ${props.length} props`);
}
