import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '@/treds';
import type { Lang } from '@/i18n';
import type { PropMeta } from './Playground';
import { inlineCode } from './inlineCode';

/**
 * Per-page corrections to the generated metadata. The d.ts has no defaults, can't express
 * "required when", and its JSDoc is written for library maintainers (#179).
 */
export interface PropOverride {
  /** A readable form of a type the compiler spells out in full. */
  type?: string;
  description?: string;
  defaultValue?: string;
  /** Condition under which an optional prop becomes required, e.g. "`iconOnly` is set". */
  requiredWhen?: string;
  hidden?: boolean;
}

const text = {
  fi: {
    prop: 'Props',
    type: 'Tyyppi',
    default: 'Oletus',
    description: 'Kuvaus',
    required: 'Pakollinen',
    when: 'Pakollinen, kun',
  },
  en: {
    prop: 'Prop',
    type: 'Type',
    default: 'Default',
    description: 'Description',
    required: 'Required',
    when: 'Required when',
  },
} satisfies Record<Lang, Record<string, string>>;

// Generic types like MouseEventHandler<HTMLButtonElement> are one unbreakable word otherwise.
function breakAfterAngle(type: string) {
  return type.split('<').flatMap((part, i) => (i === 0 ? [part] : ['<', <wbr key={i} />, part]));
}

export function PropsTable({
  props,
  label,
  lang,
  overrides = {},
  inherited = [],
}: {
  props: PropMeta[];
  label: string;
  lang: Lang;
  overrides?: Record<string, PropOverride>;
  /** Key props inherited from Mantine, which the generated list leaves out. */
  inherited?: (Omit<PropMeta, 'required'> & { required?: boolean })[];
}) {
  const t = text[lang];
  const rows: (PropMeta & PropOverride)[] = [
    ...props.map((p) => ({ ...p, ...overrides[p.name] })).filter((p) => !p.hidden),
    ...inherited.map((p) => ({ ...p, required: p.required ?? false })),
  ];
  return (
    <div className="table-wrap">
      <Table aria-label={label}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">{t.prop}</TableHeaderCell>
            <TableHeaderCell scope="col">{t.type}</TableHeaderCell>
            <TableHeaderCell scope="col">{t.default}</TableHeaderCell>
            <TableHeaderCell scope="col">{t.description}</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((p) => (
            <TableRow key={p.name}>
              <TableHeaderCell scope="row">
                <code>{p.name}</code>
              </TableHeaderCell>
              <TableCell>
                {/* One <code> per member so a long union wraps between members, not inside one. */}
                {(p.values?.map((v) => `'${v}'`) ?? [p.type]).map((type, i) => (
                  <span key={type}>
                    {i > 0 && ' | '}
                    <code>{breakAfterAngle(type)}</code>
                  </span>
                ))}
              </TableCell>
              <TableCell>{p.defaultValue ? <code>{p.defaultValue}</code> : '–'}</TableCell>
              <TableCell>
                {p.required && <strong>{t.required}. </strong>}
                {p.requiredWhen && (
                  <strong>
                    {t.when} {inlineCode(p.requiredWhen)}.{' '}
                  </strong>
                )}
                {inlineCode(p.description)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
