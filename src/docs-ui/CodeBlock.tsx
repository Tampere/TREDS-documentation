'use client';

import { useEffect, useRef, useState, type ReactNode, type SVGProps } from 'react';
import { useParams } from 'next/navigation';
import { CheckmarkIcon, IconButton } from '@tampere/treds';
import type { Lang } from '@/i18n';

const labels = {
  fi: {
    copy: 'Kopioi koodi',
    copied: 'Koodi kopioitu leikepöydälle',
    failed: 'Kopiointi epäonnistui',
  },
  en: { copy: 'Copy code', copied: 'Code copied to clipboard', failed: 'Copying failed' },
};

// Placeholder until TREDS has a copy icon; drawn on the same 24px grid as the TREDS icons.
function CopyIcon({ width = 24, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M8 8h13v13H8V8Zm2 2v9h9v-9h-9Z" />
      <path d="M3 3h13v3h-2V5H5v9h1v2H3V3Z" />
    </svg>
  );
}

// Reads the code from the rendered block, so it works for Shiki HTML and plain <pre> alike.
export function CodeBlock({ children }: { children: ReactNode }) {
  const { lang } = useParams<{ lang: Lang }>();
  const l = labels[lang] ?? labels.fi;
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  useEffect(() => {
    if (status === 'idle') return;
    const timer = setTimeout(() => setStatus('idle'), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(ref.current?.querySelector('pre')?.textContent ?? '');
      setStatus('copied');
    } catch {
      // The Clipboard API is missing outside secure contexts and can be denied by the user.
      setStatus('failed');
    }
  }

  return (
    <div className="code-block" ref={ref}>
      {children}
      <span className="code-copy">
        <IconButton size="md" aria-label={l.copy} onClick={copy}>
          {status === 'copied' ? (
            <CheckmarkIcon aria-hidden="true" />
          ) : (
            <CopyIcon aria-hidden="true" />
          )}
        </IconButton>
      </span>
      <p className="visually-hidden" role="status">
        {status === 'idle' ? '' : l[status]}
      </p>
    </div>
  );
}
