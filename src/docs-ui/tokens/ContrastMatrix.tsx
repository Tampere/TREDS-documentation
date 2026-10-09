'use client';

import {
  Typography,
  brand,
  getTheme,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@tampere/treds';
import type { Lang } from '@/i18n';
import { contrast } from './utils';

const theme = getTheme('xl');

const foregrounds: [string, string][] = [
  ['text.primary', theme.text.primary],
  ['text.secondary', theme.text.secondary],
  ['text.header', theme.text.header],
  ['text.primaryHeader', theme.text.primaryHeader],
  ['states.default', theme.states.default],
  ['states.error', theme.states.error],
  ['contrast', theme.contrast],
];

const backgrounds: [string, string][] = [
  ['background.default', theme.background.default],
  ['background.disabled', theme.background.disabled],
  ['brand.blue.main', brand.blue.main],
  ['brand.blue.mainDark', brand.blue.mainDark],
];

// WCAG 2.1 AA: 4.5:1 for normal text, 3:1 for large text (≥ 24px, or ≥ 18.66px bold).
const verdicts = {
  fi: { pass: 'AA', large: 'vain suuri teksti', fail: 'ei tekstille' },
  en: { pass: 'AA', large: 'large text only', fail: 'not for text' },
};

function verdict(ratio: number, lang: Lang) {
  const v = verdicts[lang];
  if (ratio >= 4.5) return { mark: '✓', label: v.pass };
  if (ratio >= 3) return { mark: '(✓)', label: v.large };
  return { mark: '✕', label: v.fail };
}

export function ContrastMatrix({ lang }: { lang: Lang }) {
  return (
    <div className="table-wrap">
      <Table
        aria-label={
          lang === 'fi'
            ? 'Tekstivärien kontrasti taustoja vasten'
            : 'Text colour contrast against backgrounds'
        }
      >
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">
              {lang === 'fi' ? 'Teksti \\ tausta' : 'Text \\ background'}
            </TableHeaderCell>
            {backgrounds.map(([name]) => (
              <TableHeaderCell scope="col" key={name}>
                <code>
                  {/* Lets brand.blue.mainDark wrap after a dot instead of widening the table. */}
                  {name
                    .replace('background.', 'bg.')
                    .split('.')
                    .flatMap((part, i) => (i === 0 ? [part] : ['.', <wbr key={i} />, part]))}
                </code>
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {foregrounds.map(([fgName, fg]) => (
            <TableRow key={fgName}>
              <TableHeaderCell scope="row">
                <code>{fgName}</code>
              </TableHeaderCell>
              {backgrounds.map(([bgName, bg]) => {
                const ratio = contrast(fg, bg);
                const v = verdict(ratio, lang);
                return (
                  <TableCell key={bgName}>
                    <span className="contrast-sample" style={{ color: fg, background: bg }}>
                      Aa
                    </span>{' '}
                    {/* aria-label on a plain span isn't announced; hidden text is. */}
                    <span className="nowrap">
                      {ratio.toFixed(1)}{' '}
                      <span aria-hidden="true" title={v.label}>
                        {v.mark}
                      </span>
                      <span className="visually-hidden">{v.label}</span>
                    </span>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="p2" className="legend">
        ✓ {verdicts[lang].pass} · (✓) {verdicts[lang].large} · ✕ {verdicts[lang].fail}
      </Typography>
    </div>
  );
}
