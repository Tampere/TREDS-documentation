'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  breakpoint,
} from '@tampere/treds';
import type { Lang } from '@/i18n';
import { bpKeys, toPx } from './utils';

const labels = {
  en: { table: 'Type scale per breakpoint', style: 'Style' },
};

const styles = Object.keys(
  breakpoint.xl.typography.size
) as (keyof typeof breakpoint.xl.typography.size)[];

export function TypeScale({ lang }: { lang: Lang }) {
  const l = labels[lang];
  return (
    <>
      <div className="table-wrap">
        <Table aria-label={l.table}>
          <TableHeader>
            <TableRow>
              <TableHeaderCell scope="col">{l.style}</TableHeaderCell>
              {bpKeys.map((bp) => (
                <TableHeaderCell scope="col" key={bp}>
                  {bp}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {styles.map((s) => (
              <TableRow key={s}>
                <TableHeaderCell scope="row">
                  <code>{s}</code>
                </TableHeaderCell>
                {bpKeys.map((bp) => (
                  <TableCell key={bp}>{toPx(breakpoint[bp].typography.size[s])}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
