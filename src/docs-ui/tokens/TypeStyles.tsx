'use client';

import { useEffect, useRef, useState } from 'react';
import {
  getTheme,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Typography,
} from '@tampere/treds';
import type { Lang } from '@/i18n';
import { isHex } from './utils';

const typography = getTheme('xl').components.typography;
const styles = ['h1', 'h2', 'h3', 'h4', 'h5', 'subheader', 'p1', 'p2', 'caption'] as const;

// Typography picks each style's colour inside the component, not from a typography token,
// so read it off the rendered sample and name it by matching the semantic text colours.
const textTokens = Object.entries(getTheme('xl').text).filter(([, v]) => isHex(v)) as [
  string,
  string,
][];
function colourName(rgb: string) {
  const hex = `#${(rgb.match(/\d+/g) ?? [])
    .slice(0, 3)
    .map((n) => Number(n).toString(16).padStart(2, '0'))
    .join('')}`;
  return textTokens.find(([, v]) => v.toLowerCase() === hex)?.[0] ?? hex;
}

const labels = {
  en: {
    table: 'Type styles',
    style: 'Style',
    sample: 'Sample',
    font: 'Font',
    weight: 'Weight / line height',
    colour: 'Colour',
    text: 'Tampere',
  },
};

export function TypeStyles({ lang }: { lang: Lang }) {
  const l = labels[lang];
  const samples = useRef<Record<string, HTMLElement | null>>({});
  const [colours, setColours] = useState<Record<string, string>>({});

  useEffect(() => {
    setColours(
      Object.fromEntries(
        styles.map((s) => [s, colourName(getComputedStyle(samples.current[s]!).color)])
      )
    );
  }, []);

  return (
    <div className="table-wrap">
      <Table aria-label={l.table}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">{l.style}</TableHeaderCell>
            <TableHeaderCell scope="col">{l.sample}</TableHeaderCell>
            <TableHeaderCell scope="col">{l.font}</TableHeaderCell>
            <TableHeaderCell scope="col">{l.weight}</TableHeaderCell>
            <TableHeaderCell scope="col">
              {l.colour} (<code>text.…</code>)
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {styles.map((s) => (
            <TableRow key={s}>
              <TableHeaderCell scope="row">
                <code>{s}</code>
              </TableHeaderCell>
              <TableCell>
                <Typography
                  variant={s}
                  component="span"
                  ref={(el) => {
                    samples.current[s] = el;
                  }}
                >
                  {l.text}
                </Typography>
              </TableCell>
              <TableCell>
                {typography[s].fontFamily.split(',')[0].replace(' Variable', '')}
              </TableCell>
              <TableCell>
                {typography[s].fontWeight} / {typography[s].lineHeight}
              </TableCell>
              <TableCell>
                <code>{colours[s] ? `text.${colours[s]}`.replace('text.#', '#') : '…'}</code>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
