'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, ChevronDownIcon, ChevronUpIcon, NavigationLink, Typography } from '@tampere/treds';
import { href, sections, slugFromPath, type DocPage } from '@/nav';
import { dict, type Lang } from '@/i18n';

export function Sidebar({ lang }: { lang: Lang }) {
  const current = slugFromPath(usePathname());
  const [open, setOpen] = useState(false);
  const t = dict[lang];

  return (
    <nav aria-label={t.sidebar} className="sidebar">
      {/* Below 1024px the list collapses behind this toggle; CSS hides the toggle above it. */}
      <Button
        variant="secondary"
        className="sidebar-toggle"
        aria-expanded={open}
        aria-controls="sidebar-list"
        rightIcon={open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        onClick={() => setOpen((o) => !o)}
      >
        {t.pages}
      </Button>
      <div id="sidebar-list" className="sidebar-list" data-open={open}>
        {sections.map((section) => (
          <section key={section.id} className="sidebar-section">
            <Typography variant="caption" component="h2" className="sidebar-heading">
              {section.title[lang]}
            </Typography>
            {runs(section.pages).map((run) => (
              <div key={run.group?.en ?? ''}>
                {run.group && (
                  <Typography variant="caption" component="h3" className="sidebar-group">
                    {run.group[lang]}
                  </Typography>
                )}
                <ul>
                  {run.pages.map((page) => {
                    const path = href(lang, page.slug);
                    return (
                      <li key={page.slug}>
                        <NavigationLink
                          size="sm"
                          isSelected={page.slug === current}
                          renderLink={(className, ariaCurrent) => (
                            <Link
                              href={path}
                              className={className}
                              aria-current={ariaCurrent}
                              onClick={() => setOpen(false)}
                            >
                              {page.title[lang]}
                            </Link>
                          )}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </nav>
  );
}

// Consecutive pages that share a group, so each group gets one heading.
function runs(pages: DocPage[]) {
  const result: { group?: DocPage['group']; pages: DocPage[] }[] = [];
  for (const page of pages) {
    const last = result.at(-1);
    if (last && last.group === page.group) last.pages.push(page);
    else result.push({ group: page.group, pages: [page] });
  }
  return result;
}
