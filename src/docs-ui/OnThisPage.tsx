'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { TextLink, Typography } from '@tampere/treds';

// Built from the rendered h2s, so it needs no per-page configuration. Without JS it
// simply doesn't appear, which loses nothing: the headings are still on the page.
export function OnThisPage({ label }: { label: string }) {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const found = [...document.querySelectorAll<HTMLElement>('.doc-main article h2[id]')];
    setHeadings(found.map((h) => ({ id: h.id, text: h.textContent ?? '' })));
  }, [pathname]);

  if (headings.length < 2) return null;
  return (
    <nav aria-label={label} className="on-this-page" data-pagefind-ignore>
      <Typography variant="caption" className="on-this-page-title">
        {label}
      </Typography>
      <ul>
        {headings.map((h) => (
          <li key={h.id}>
            <TextLink href={`#${h.id}`} size="p2">
              {h.text}
            </TextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
