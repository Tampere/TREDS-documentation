'use client';

import { useState, type ComponentType, type SVGProps } from 'react';
import * as treds from '@tampere/treds';
import { TextField, Typography } from '@tampere/treds';
import type { Lang } from '@/i18n';

// Read from the package's own exports, so a new icon appears here without editing this file.
const icons = Object.entries(treds)
  .filter(([name, value]) => name.endsWith('Icon') && typeof value === 'function')
  .sort(([a], [b]) => a.localeCompare(b)) as [string, ComponentType<SVGProps<SVGSVGElement>>][];

const labels = {
  fi: {
    filter: 'Suodata ikoneita',
    count: (shown: number, total: number) =>
      shown === total ? `${total} ikonia` : `${shown} / ${total} ikonia`,
    none: 'Ei osumia. Ikonien nimet ovat englanniksi, esim. "search" tai "arrow".',
    copy: 'Kopioi',
    copied: (name: string) => `${name} kopioitu leikepöydälle`,
  },
  en: {
    filter: 'Filter icons',
    count: (shown: number, total: number) =>
      shown === total ? `${total} icons` : `${shown} of ${total} icons`,
    none: 'No matches. Try e.g. "search" or "arrow".',
    copy: 'Copy',
    copied: (name: string) => `${name} copied to clipboard`,
  },
};

export function IconGallery({ lang }: { lang: Lang }) {
  const l = labels[lang];
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const q = query.trim().toLowerCase().replace(/\s+/g, '');
  const shown = icons.filter(([name]) => name.toLowerCase().includes(q));

  async function copy(name: string) {
    const snippet = `<${name} />`;
    try {
      await navigator.clipboard.writeText(snippet);
      setStatus(l.copied(snippet));
    } catch {
      setStatus(snippet);
    }
  }

  return (
    <div className="icon-gallery">
      <TextField
        inputLabel={l.filter}
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        showClearButton
        clearButtonLabel={lang === 'fi' ? 'Tyhjennä' : 'Clear'}
        onClearButtonClick={() => setQuery('')}
      />
      <Typography variant="p2" className="icon-count" aria-live="polite">
        {shown.length ? l.count(shown.length, icons.length) : l.none}
      </Typography>
      <ul className="icon-grid">
        {shown.map(([name, Icon]) => (
          <li key={name}>
            <button type="button" className="icon-tile" onClick={() => copy(name)}>
              <Icon aria-hidden="true" width={32} />
              <Typography variant="caption" component="span" className="icon-name">
                {/* Break between words of the camelCase name, not mid-word. */}
                {name
                  .replace(/Icon$/, '')
                  .split(/(?=[A-Z])/)
                  .flatMap((part, i) => (i === 0 ? [part] : [<wbr key={i} />, part]))}
              </Typography>
              <span className="visually-hidden">
                {l.copy} {`<${name} />`}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="visually-hidden" role="status">
        {status}
      </p>
    </div>
  );
}
