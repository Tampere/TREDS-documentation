'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  breakpoint,
  vars,
} from '@tampere/treds';
import type { Lang } from '@/i18n';
import { bpKeys, toPx } from './utils';

const steps = Object.keys(breakpoint.xl.spacing) as (keyof typeof breakpoint.xl.spacing)[];

export function SpacingScale({ lang }: { lang: Lang }) {
  return (
    <div className="table-wrap">
      <Table
        aria-label={lang === 'fi' ? 'Välistys breakpointeittain' : 'Spacing scale per breakpoint'}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">{lang === 'fi' ? 'Askel' : 'Step'}</TableHeaderCell>
            {bpKeys.map((bp) => (
              <TableHeaderCell scope="col" key={bp}>
                {bp}
              </TableHeaderCell>
            ))}
            <TableHeaderCell scope="col" aria-label="Size at xl" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {steps.map((s) => (
            <TableRow key={s}>
              <TableHeaderCell scope="row">
                <code>{s}</code>
              </TableHeaderCell>
              {bpKeys.map((bp) => (
                <TableCell key={bp}>{toPx(breakpoint[bp].spacing[s])}</TableCell>
              ))}
              <TableCell>
                <span
                  className="spacing-bar"
                  style={{
                    width: breakpoint.xl.spacing[s],
                    background: vars.brand.blue.main,
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
