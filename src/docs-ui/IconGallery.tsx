'use client';

import { useState, type ComponentType, type SVGProps } from 'react';
import * as treds from '@tampere/treds';
import { TextField, Typography } from '@tampere/treds';
import type { Lang } from '@/i18n';
import { IconTile } from './IconTile';

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
    tile: {
      actions: 'lataa tai kopioi',
      png: 'Lataa PNG',
      svg: 'Lataa SVG',
      copy: 'Kopioi koodi',
      copied: (snippet: string) => `${snippet} kopioitu leikepöydälle`,
      downloaded: (fileName: string) => `${fileName} ladattu`,
      failed: (fileName: string) => `Tiedoston ${fileName} lataus epäonnistui. Yritä uudelleen.`,
    },
  },
  en: {
    filter: 'Filter icons',
    count: (shown: number, total: number) =>
      shown === total ? `${total} icons` : `${shown} of ${total} icons`,
    none: 'No matches. Try e.g. "search" or "arrow".',
    tile: {
      actions: 'download or copy',
      png: 'Download PNG',
      svg: 'Download SVG',
      copy: 'Copy code',
      copied: (snippet: string) => `${snippet} copied to clipboard`,
      downloaded: (fileName: string) => `${fileName} downloaded`,
      failed: (fileName: string) => `Downloading ${fileName} failed. Try again.`,
    },
  },
};

export function IconGallery({ lang }: { lang: Lang }) {
  const l = labels[lang];
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [openName, setOpenName] = useState<string | null>(null);
  const q = query.trim().toLowerCase().replace(/\s+/g, '');
  const shown = icons.filter(([name]) => name.toLowerCase().includes(q));

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
          <IconTile
            key={name}
            name={name}
            Icon={Icon}
            opened={openName === name}
            onOpenChange={(opened) => setOpenName(opened ? name : null)}
            onStatus={setStatus}
            labels={l.tile}
          />
        ))}
      </ul>
      <p className="visually-hidden" role="status">
        {status}
      </p>
    </div>
  );
}
