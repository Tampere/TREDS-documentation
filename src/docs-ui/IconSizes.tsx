'use client';

import {
  getTheme,
  SearchIcon,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@tampere/treds';
import type { Lang } from '@/i18n';
import { toPx } from './tokens/utils';

const labels = {
  en: { table: 'Icon sizes', size: 'Size', sample: 'Sample' },
};

const sizes = getTheme('xl').components.icon.size;

export function IconSizes({ lang }: { lang: Lang }) {
  const l = labels[lang];
  return (
    <div className="table-wrap">
      <Table aria-label={l.table}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">
              Token (<code>components.icon.size.…</code>)
            </TableHeaderCell>
            <TableHeaderCell scope="col">{l.size}</TableHeaderCell>
            <TableHeaderCell scope="col">{l.sample}</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(sizes).map(([name, value]) => (
            <TableRow key={name}>
              <TableHeaderCell scope="row">
                <code>{name}</code>
              </TableHeaderCell>
              <TableCell>{toPx(value)}</TableCell>
              <TableCell>
                <SearchIcon
                  aria-hidden="true"
                  width={value}
                  height={value}
                  className="icon-sample"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
