import { Fragment } from 'react';
import { Linkbox, TextLink, Typography } from '@/treds';
import { components, repoUrl } from '@/components';
import { href } from '@/nav';
import type { Lang } from '@/i18n';
import changes from '@/generated/changes.json';
import { ComponentRef } from './ComponentPage';

const text = {
  en: {
    developers: 'For developers',
    developersText: 'Install the package, set up the theme and see how versions work.',
    designers: 'For designers',
    designersText: 'Colours, typography, spacing and icons.',
    whatsNew: "What's new",
    released: 'released',
    newComponents: 'New components:',
    changes: 'changes',
    allChanges: 'Upgrade notes and all changes are in the',
    changelog: 'changelog',
  },
} satisfies Record<Lang, Record<string, string>>;

/** The two entry points on the front page. */
export function StartCards({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <div className="overview-grid">
      <Linkbox
        href={href(lang, 'introduction')}
        title={t.developers}
        description={t.developersText}
        inverted
      />
      <Linkbox
        href={href(lang, 'foundations')}
        title={t.designers}
        description={t.designersText}
        inverted
      />
    </div>
  );
}

/** The latest release, generated from the CHANGELOG at build time. */
export function LatestRelease({ lang }: { lang: Lang }) {
  const t = text[lang];
  const latest = changes[0];
  if (!latest) return null;
  const entries = changes.filter((c) => c.version === latest.version);
  const added = [...new Set(entries.flatMap((c) => c.added))].filter((n) =>
    components.some((c) => c.name === n)
  );
  return (
    <>
      <Typography variant="h2" id="whats-new">
        {t.whatsNew}
      </Typography>
      <Typography variant="p1">
        <strong>{latest.version}</strong>, {t.released} {latest.date}.{' '}
        {added.length ? (
          <>
            {t.newComponents}{' '}
            {added.map((name, i) => (
              <Fragment key={name}>
                {i > 0 && ', '}
                <ComponentRef name={name} lang={lang} />
              </Fragment>
            ))}
            .
          </>
        ) : (
          `${entries.length} ${t.changes}.`
        )}
      </Typography>
      <Typography variant="p1">
        {t.allChanges} <TextLink href={`${repoUrl}/blob/main/CHANGELOG.md`}>{t.changelog}</TextLink>
        .
      </Typography>
    </>
  );
}
