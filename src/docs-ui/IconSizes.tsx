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

const sizes = getTheme('xl').components.icon.size;

export function IconSizes({ lang }: { lang: Lang }) {
  return (
    <div className="table-wrap">
      <Table aria-label={lang === 'fi' ? 'Ikonien koot' : 'Icon sizes'}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">
              Token (<code>components.icon.size.…</code>)
            </TableHeaderCell>
            <TableHeaderCell scope="col">{lang === 'fi' ? 'Koko' : 'Size'}</TableHeaderCell>
            <TableHeaderCell scope="col">{lang === 'fi' ? 'Näyte' : 'Sample'}</TableHeaderCell>
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
                <SearchIcon aria-hidden="true" width={value} height={value} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
