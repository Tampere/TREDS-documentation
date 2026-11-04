'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { TextLink, Typography } from '@tampere/treds';

// Built from the rendered h2s, so it needs no per-page configuration. Without JS it
// simply doesn't appear, which loses nothing: the headings are still on the page.
export function OnThisPage({ label }: { label: string }) {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  // Also rebuilt on DOM changes, because a hot reload in `next dev` swaps the content without
  // changing the path.
  useEffect(() => {
    const main = document.querySelector('.doc-main');
    const read = () => {
      const found = [...document.querySelectorAll<HTMLElement>('.doc-main article h2[id]')];
      const next = found.map((h) => ({ id: h.id, text: h.textContent ?? '' }));
      setHeadings((prev) => (JSON.stringify(prev) === JSON.stringify(next) ? prev : next));
    };
    read();
    if (!main) return;
    const observer = new MutationObserver(read);
    observer.observe(main, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
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
