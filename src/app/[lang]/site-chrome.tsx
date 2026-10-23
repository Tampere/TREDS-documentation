'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppHeader, Footer, SkipLink, ThemeProvider } from '@tampere/treds';
import { dict, languages, type Lang } from '@/i18n';
import { href, sections, slugFromPath } from '@/nav';
import { Sidebar } from '@/docs-ui/Sidebar';
import { tokenVars } from '@/docs-ui/tokenVars';

export function SiteChrome({ lang, children }: { lang: Lang; children: ReactNode }) {
  const pathname = usePathname();
  const current = slugFromPath(pathname);
  const t = dict[lang];

  return (
    <ThemeProvider>
      <div className="docs-root" style={tokenVars}>
        <SkipLink />
        <AppHeader
          siteName={t.siteName}
          homeHref={href(lang, '')}
          navAriaLabel={t.navAriaLabel}
          navigation={sections.map((section) => {
            const path = href(lang, section.pages[0].slug);
            return {
              label: section.title[lang],
              isSelected: section.pages.some((p) => p.slug === current),
              renderLink: (className, ariaCurrent) => (
                <Link href={path} className={className} aria-current={ariaCurrent}>
                  {section.title[lang]}
                </Link>
              ),
            };
          })}
          // A switcher with one option only adds noise.
          languages={
            languages.length > 1
              ? languages.map((code) => ({
                  code,
                  label: code.toUpperCase(),
                  href: href(code, current),
                }))
              : undefined
          }
          currentLanguage={lang}
          languagesAriaLabel={t.languagesAriaLabel}
          menuButtonLabel={t.menu}
        />
        <div className="docs-layout">
          <Sidebar lang={lang} />
          <main id="main-content" className="docs-content">
            {children}
          </main>
        </div>
        <Footer
          variant="dense"
          accessibilityStatement={{
            label: t.accessibility,
            href: href(lang, 'accessibility'),
          }}
        />
      </div>
    </ThemeProvider>
  );
}
