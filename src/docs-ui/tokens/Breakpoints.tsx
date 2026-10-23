'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  breakpoint,
  getTheme,
} from '@tampere/treds';
import type { Lang } from '@/i18n';
import { bpKeys, toPx, viewportRange } from './utils';

const tableLabel = { en: 'Breakpoints' };

const labels: Record<Lang, string[]> = {
  en: ['Key', 'Applies at viewport', 'Columns', 'Gutter', 'Margin', 'Control height'],
};

export function Breakpoints({ lang }: { lang: Lang }) {
  return (
    <div className="table-wrap">
      <Table aria-label={tableLabel[lang]}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">{labels[lang][0]}</TableHeaderCell>
            <TableHeaderCell scope="col">{labels[lang][1]}</TableHeaderCell>
            <TableHeaderCell scope="col">{labels[lang][2]}</TableHeaderCell>
            <TableHeaderCell scope="col">{labels[lang][3]}</TableHeaderCell>
            <TableHeaderCell scope="col">{labels[lang][4]}</TableHeaderCell>
            <TableHeaderCell scope="col">{labels[lang][5]}</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bpKeys.map((bp) => (
            <TableRow key={bp}>
              <TableHeaderCell scope="row">
                <code>{bp}</code>
              </TableHeaderCell>
              <TableCell>{viewportRange(bp)}</TableCell>
              <TableCell>{breakpoint[bp].layout.columns}</TableCell>
              <TableCell>{toPx(breakpoint[bp].layout.gutter)}</TableCell>
              <TableCell>{toPx(breakpoint[bp].layout.margin)}</TableCell>
              <TableCell>{toPx(getTheme(bp).components.controlHeight)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
