'use client';

import {
  getTheme,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@tampere/treds';
import type { Lang } from '@/i18n';
import { colorUsage } from './colorUsage';
import { isHex } from './utils';

// The non-component theme tokens are the same at every breakpoint; any key works.
const theme = Object.fromEntries(
  Object.entries(getTheme('xl')).filter(([key]) => key !== 'components')
);

// Meant to be spread whole into a style, so one row each instead of one per property.
const wholeTokens = new Set(['focusRing', 'focusRingInverted']);

function flatten(value: unknown, path: string): [string, unknown][] {
  if (typeof value !== 'object' || value === null || wholeTokens.has(path)) {
    return [[path, value]];
  }
  return Object.entries(value).flatMap(([k, v]) => flatten(v, path ? `${path}.${k}` : k));
}

// Mantine's rem() emits `calc(<n>rem * var(--mantine-scale))`, and focusRing halves that.
function readable(value: string): string {
  return value
    .replace(
      /calc\(([\d.]+)rem \* var\(--mantine-scale\)\)/g,
      (_, n: string) => `${Math.round(parseFloat(n) * 16 * 100) / 100}px`
    )
    .replace(
      /calc\(([\d.]+)px \/ ([\d.]+)\)/g,
      (_, a: string, b: string) => `${parseFloat(a) / parseFloat(b)}px`
    );
}

function display(value: unknown): string {
  if (typeof value === 'object' && value !== null) {
    return Object.entries(value)
      .map(
        ([k, v]) => `${k.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}: ${readable(String(v))}`
      )
      .join('; ');
  }
  return readable(String(value));
}

// Colour usage is shared with the Colours page; these cover the rest.
const usage: Record<string, Record<Lang, string>> = {
  ...colorUsage,
  'hover.overlay': { en: 'Hover tint laid over a light surface, e.g. Linkbox and calendar days.' },
  'hover.overlayContrast': { en: 'Hover tint on a coloured surface, e.g. inverted Linkbox.' },
  'cornerRadius.sharp': { en: 'Square corners, the default.' },
  'cornerRadius.rounded': { en: 'Pill shape for rounded controls.' },
  strokeWeight: { en: 'Border and focus outline width.' },
  minTouchTarget: {
    en: 'Smallest touch target, for controls whose content alone would be smaller.',
  },
  dropShadow: { en: 'Shadow colour, e.g. the date picker popover.' },
  dropShadowTile: { en: 'Shadow of raised tiles: Card, Paper, Accordion.' },
  'selectionStates.unchecked.hover': { en: 'Unchecked checkbox and radio button on hover.' },
  'selectionStates.unchecked.focus': { en: 'Unchecked checkbox and radio button when focused.' },
  'selectionStates.unchecked.active': { en: 'Unchecked checkbox and radio button while pressed.' },
  'highlight.backgroundColor': {
    en: 'Background of the matching text in SearchField suggestions.',
  },
  focusRing: { en: 'Focus outline on light backgrounds. Spread it into a :focus-visible style.' },
  focusRingInverted: { en: 'Focus outline on dark or coloured backgrounds.' },
};

const labels = {
  en: {
    table: 'Theme tokens',
    token: 'Token',
    use: 'Use for',
    value: 'Value',
  },
};

export function ThemeTokens({ lang }: { lang: Lang }) {
  const l = labels[lang];
  return (
    <div className="table-wrap">
      <Table aria-label={l.table}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">
              {l.token} (<code>vars.theme.…</code>)
            </TableHeaderCell>
            <TableHeaderCell scope="col">{l.value}</TableHeaderCell>
            <TableHeaderCell scope="col">{l.use}</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {flatten(theme, '').map(([path, value]) => (
            <TableRow key={path}>
              <TableHeaderCell scope="row">
                <code>{path}</code>
              </TableHeaderCell>
              <TableCell>
                {isHex(value) && (
                  <>
                    <span className="swatch-dot" style={{ background: value }} />{' '}
                  </>
                )}
                <code>{display(value)}</code>
              </TableCell>
              <TableCell>{usage[path]?.[lang] ?? '–'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
