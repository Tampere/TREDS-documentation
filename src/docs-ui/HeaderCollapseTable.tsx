'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@tampere/treds';
import type { Lang } from '@/i18n';

// Mirrors the media queries in AppHeader.css.ts (xl, lg and md appWidth).
const text = {
  en: {
    label: 'AppHeader parts by screen width',
    head: ['Screen width', 'On the row', 'In the menu'],
    rows: [
      [
        '1440 px and up',
        'logo, service name, main menu, languages, actions, login',
        'no Menu button',
      ],
      ['1024–1439 px', 'logo, service name, languages, actions, login', 'main menu'],
      ['768–1023 px', 'logo, service name, actions, login', 'main menu, languages'],
      ['under 768 px', 'logo, login', 'main menu, actions, languages'],
    ],
  },
} satisfies Record<Lang, { label: string; head: string[]; rows: string[][] }>;

export function HeaderCollapseTable({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <div className="table-wrap">
      <Table aria-label={t.label}>
        <TableHeader>
          <TableRow>
            {t.head.map((h) => (
              <TableHeaderCell key={h} scope="col">
                {h}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {t.rows.map(([width, row, menu]) => (
            <TableRow key={width}>
              <TableHeaderCell scope="row">{width}</TableHeaderCell>
              <TableCell>{row}</TableCell>
              <TableCell>{menu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
