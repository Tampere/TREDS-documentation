import { Fragment } from 'react';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Linkbox, TextLink, Typography } from '@/treds';
import { componentSlug, components, findComponent, groups, storybookHref } from '@/components';
import { content } from '@/content';
import { href } from '@/nav';
import type { Lang } from '@/i18n';
import { ComponentBadges, ComponentChanges, ComponentLinks } from './ComponentPage';
import { PropsTable } from './PropsTable';
import type { PropMeta } from './Playground';
import { Prose } from './Prose';

const text = {
  en: {
    stubNote: 'This component has no usage guidance yet. Examples and states are in',
    storybook: 'Storybook',
    propsNote:
      "The table lists only the props TREDS defines itself. Props inherited from Mantine aren't shown.",
    noProps: "Props couldn't be read from the published package's types. See the props in",
    propsLabel: 'props',
    overviewIntro: 'TREDS components grouped by purpose.',
    overviewStubs:
      'Components marked "Guidance coming" have only their props and change history for now.',
    stub: 'Guidance coming',
    overviewTitle: 'Components',
  },
} satisfies Record<Lang, Record<string, string>>;

const opensInNewTab = { en: ' (opens in a new tab)' };

// Zero-width spaces between camel-case parts, so a long name such as LabeledIconButton can
// wrap in a narrow card instead of overflowing it (TREDS Typography doesn't wrap, #184).
const breakable = (name: string) => name.replace(/(?<=[a-z])(?=[A-Z])/g, '\u200b');

async function readProps(name: string): Promise<PropMeta[]> {
  try {
    const file = path.join(process.cwd(), 'src/generated', `${name}.props.json`);
    const props: PropMeta[] = JSON.parse(await readFile(file, 'utf8'));
    return props.filter((p) => p.name !== 'className' && p.name !== 'data-testid');
  } catch {
    return [];
  }
}

function StorybookLink({ name, lang }: { name: string; lang: Lang }) {
  return (
    <TextLink href={storybookHref(name)} openExternal openExternalLabel={opensInNewTab[lang]}>
      {text[lang].storybook}
    </TextLink>
  );
}

// The overview card shows the first sentence of the page's own lead, so the text lives in one
// place. MDX paths are read from content.ts, which maps slugs to files.
async function pageLeads(lang: Lang): Promise<Record<string, string>> {
  const loaders = await readFile(path.join(process.cwd(), 'src/content.ts'), 'utf8');
  const files = [
    ...loaders.matchAll(
      new RegExp(`'([^']+)': \\{\\s*${lang}: \\(\\) => import\\('\\./([^']+)'\\)`, 'g')
    ),
  ];
  const leads: Record<string, string> = {};
  for (const [, slug, file] of files) {
    const mdx = await readFile(path.join(process.cwd(), 'src', file), 'utf8');
    const lead = mdx.match(/<ComponentBadges[^\n]*\/>\n\n(.+)\n/)?.[1];
    if (!lead) continue;
    const plain = lead
      .replace(/<ComponentRef name="(\w+)"[^>]*\/>/g, '$1')
      .replace(/<ComponentRef[^>]*>([^<]*)<\/ComponentRef>/g, '$1')
      .replace(/`/g, '');
    leads[slug] = plain.match(/^.+?\.(?=\s|$)/)?.[0] ?? plain;
  }
  return leads;
}

/** A component page generated from components.json, until a hand-written page replaces it. */
export async function ComponentStub({ name, lang }: { name: string; lang: Lang }) {
  const t = text[lang];
  const props = await readProps(name);
  return (
    <Prose>
      <Typography variant="h1">{name}</Typography>
      <ComponentBadges name={name} lang={lang} stub />
      <Typography variant="p1">{findComponent(name).description[lang]}</Typography>
      <ComponentLinks name={name} lang={lang} />
      <blockquote>
        <Typography variant="p1">
          {t.stubNote} <StorybookLink name={name} lang={lang} />.
        </Typography>
      </blockquote>
      <Typography variant="h2" id="api">
        API
      </Typography>
      {props.length ? (
        <>
          <PropsTable props={props} label={`${name} ${t.propsLabel}`} lang={lang} />
          <Typography variant="p1">{t.propsNote}</Typography>
        </>
      ) : (
        <Typography variant="p1">
          {t.noProps} <StorybookLink name={name} lang={lang} />.
        </Typography>
      )}
      <ComponentChanges name={name} lang={lang} />
    </Prose>
  );
}

export async function ComponentOverview({ lang }: { lang: Lang }) {
  const t = text[lang];
  const leads = await pageLeads(lang);
  const anyStub = components.some((c) => !content[componentSlug(c.name)]);
  return (
    <Prose>
      <Typography variant="h1">{t.overviewTitle}</Typography>
      <Typography variant="p1">
        {t.overviewIntro}
        {anyStub && ` ${t.overviewStubs}`}
      </Typography>
      {Object.entries(groups).map(([id, group]) => (
        <Fragment key={id}>
          <Typography variant="h2" id={id}>
            {group[lang]}
          </Typography>
          <div className="overview-grid">
            {components
              .filter((c) => c.group === id)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((c) => {
                const slug = componentSlug(c.name);
                const stub = !content[slug];
                return (
                  <Linkbox
                    key={c.name}
                    href={href(lang, slug)}
                    title={breakable(c.name)}
                    description={leads[slug] ?? c.description[lang]}
                    inverted
                    eyebrow={stub ? t.stub : undefined}
                    // Linkbox names the link with aria-label = title, which hides the eyebrow
                    // from screen readers, so the stub marker goes into the name too.
                    aria-label={stub ? `${c.name}, ${t.stub.toLowerCase()}` : undefined}
                  />
                );
              })}
          </div>
        </Fragment>
      ))}
    </Prose>
  );
}
