'use client';

import {
  getTheme,
  primitives,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@tampere/treds';
import type { Lang } from '@/i18n';
import { colorUsage } from './colorUsage';
import { contrast, isHex } from './utils';

// Colours are the same at every breakpoint; any key works.
const theme = getTheme('xl');

export const colorGroups = {
  text: ['text'],
  states: ['states'],
  surfaces: ['background', 'inputStates', 'divider', 'contrast'],
  focus: ['focus'],
} as const;

const primitiveName = new Map<string, string>(
  Object.entries(primitives.colors).flatMap(([group, stops]) =>
    Object.entries(stops)
      .filter(([, hex]) => isHex(hex))
      .map(([stop, hex]) => [(hex as string).toLowerCase(), `${group}.${stop}`])
  )
);

function tokensFor(keys: readonly string[]): [string, string][] {
  return keys.flatMap((key) => {
    const value = theme[key as keyof typeof theme];
    if (isHex(value)) return [[key, value]];
    return Object.entries(value as object)
      .filter(([, v]) => isHex(v))
      .map(([k, v]) => [`${key}.${k}`, v as string] as [string, string]);
  });
}

const labels = {
  fi: {
    table: 'Värit',
    token: 'Token',
    use: 'Käyttö',
    value: 'Arvo',
    primitive: 'Primitiivi',
    onWhite: 'Valkoisella',
  },
  en: {
    table: 'Colours',
    token: 'Token',
    use: 'Use for',
    value: 'Value',
    primitive: 'Primitive',
    onWhite: 'On white',
  },
};

export function SemanticColors({ group, lang }: { group: keyof typeof colorGroups; lang: Lang }) {
  const l = labels[lang];
  return (
    <div className="table-wrap">
      <Table aria-label={`${l.table}: ${group}`}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">
              {l.token} (<code>vars.theme.…</code>)
            </TableHeaderCell>
            <TableHeaderCell scope="col" aria-label="Swatch" />
            <TableHeaderCell scope="col">{l.use}</TableHeaderCell>
            <TableHeaderCell scope="col">{l.value}</TableHeaderCell>
            <TableHeaderCell scope="col">{l.onWhite}</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokensFor(colorGroups[group]).map(([path, hex]) => {
            const ratio = contrast(hex, '#ffffff');
            return (
              <TableRow key={path}>
                <TableHeaderCell scope="row">
                  <code>{path}</code>
                </TableHeaderCell>
                <TableCell>
                  <span className="swatch-dot" style={{ background: hex }} />
                </TableCell>
                <TableCell>{colorUsage[path]?.[lang] ?? '–'}</TableCell>
                <TableCell>
                  <code>{hex}</code>
                  <br />
                  <code>{primitiveName.get(hex.toLowerCase()) ?? ''}</code>
                </TableCell>
                <TableCell>{ratio.toFixed(2)}:1</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
