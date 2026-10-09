import { Badge, TextLink, Typography } from '@/treds';
import { componentSlug, findComponent, repoUrl, sourceHref, storybookHref } from '@/components';
import { href } from '@/nav';
import type { Lang } from '@/i18n';
import changes from '@/generated/changes.json';
import { inlineCode } from './inlineCode';

const text = {
  fi: {
    meta: 'Komponentin tiedot',
    source: 'Lähdekoodi',
    since: 'Versiosta',
    stub: 'Ohjeistus tulossa',
    history: 'Muutokset',
    opensInNewTab: '(avautuu uuteen välilehteen)',
    changesTitle: 'Muutokset ja palaute',
    noChanges: 'Ei kirjattuja muutoksia.',
    fullHistory: 'Koko muutoshistoria (englanniksi)',
    openIssues: 'Avoimet issuet',
    feedback: 'Ilmoita ongelmasta tai ehdota muutosta',
  },
  en: {
    meta: 'Component details',
    source: 'Source code',
    since: 'Since',
    stub: 'Guidance coming',
    history: 'Changes',
    opensInNewTab: '(opens in a new tab)',
    changesTitle: 'Changes and feedback',
    noChanges: 'No recorded changes.',
    fullHistory: 'Full change history',
    openIssues: 'Open issues',
    feedback: 'Report a problem or suggest a change',
  },
} satisfies Record<Lang, Record<string, string>>;

const changesId = { fi: 'muutokset-ja-palaute', en: 'changes-and-feedback' };

function External({
  href,
  lang,
  size = 'p1',
  children,
}: {
  href: string;
  lang: Lang;
  size?: 'p1' | 'p2';
  children: string;
}) {
  return (
    <TextLink href={href} size={size} openExternal openExternalLabel={text[lang].opensInNewTab}>
      {children}
    </TextLink>
  );
}

/** `stub` marks a generated page that has no usage guidance yet. */
export function ComponentBadges({
  name,
  lang,
  stub,
}: {
  name: string;
  lang: Lang;
  stub?: boolean;
}) {
  return (
    <div className="component-badges">
      <Badge>
        {text[lang].since} {findComponent(name).since}
      </Badge>
      {stub && <Badge inverted>{text[lang].stub}</Badge>}
    </div>
  );
}

export function ComponentLinks({ name, lang }: { name: string; lang: Lang }) {
  const t = text[lang];
  return (
    <ul className="component-meta" aria-label={t.meta}>
      <li>
        <External href={storybookHref(name)} lang={lang} size="p2">
          Storybook
        </External>
      </li>
      <li>
        <External href={sourceHref(name)} lang={lang} size="p2">
          {t.source}
        </External>
      </li>
      <li>
        <TextLink href={`#${changesId[lang]}`} size="p2">
          {t.history}
        </TextLink>
      </li>
    </ul>
  );
}

/** A component name in running text, linked to its page. */
export function ComponentRef({
  name,
  lang,
  children = name,
}: {
  name: string;
  lang: Lang;
  children?: string;
}) {
  findComponent(name);
  return <TextLink href={href(lang, componentSlug(name))}>{children}</TextLink>;
}

export function RelatedComponents({ names, lang }: { names: string[]; lang: Lang }) {
  return (
    <ul className="list">
      {names.map((name) => (
        <li key={name}>
          <ComponentRef name={name} lang={lang} />
        </li>
      ))}
    </ul>
  );
}

export function ComponentChanges({
  name,
  lang,
  limit = 5,
}: {
  name: string;
  lang: Lang;
  limit?: number;
}) {
  const t = text[lang];
  const own = changes.filter((c) => c.mentions.includes(name)).slice(0, limit);
  const issueSearch = `${repoUrl}/issues?q=${encodeURIComponent(`is:issue is:open in:title ${name}`)}`;
  return (
    <>
      <Typography variant="h2" id={changesId[lang]}>
        {t.changesTitle}
      </Typography>
      {own.length ? (
        <ul className="list changes">
          {own.map((c) => (
            <li key={`${c.version}-${c.summary}`}>
              <strong>{c.version}</strong> ({c.date}): {inlineCode(c.summary)}
              {c.issue && (
                <>
                  {' '}
                  <TextLink href={`${repoUrl}/issues/${c.issue}`}>#{c.issue}</TextLink>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <Typography variant="p1">{t.noChanges}</Typography>
      )}
      <ul className="component-meta">
        <li>
          <External href={`${repoUrl}/blob/main/CHANGELOG.md`} lang={lang} size="p2">
            {t.fullHistory}
          </External>
        </li>
        <li>
          <External href={issueSearch} lang={lang} size="p2">
            {t.openIssues}
          </External>
        </li>
        <li>
          <External href={`${repoUrl}/issues/new`} lang={lang} size="p2">
            {t.feedback}
          </External>
        </li>
      </ul>
    </>
  );
}
