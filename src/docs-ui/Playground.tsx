'use client';

import { useState, type ComponentType } from 'react';
import { Checkbox, Select, TextField } from '@tampere/treds';
import type { Lang } from '@/i18n';
import { CodeBlock } from './CodeBlock';

export interface PropMeta {
  name: string;
  type: string;
  values?: string[];
  required: boolean;
  description: string;
  defaultValue?: string;
}

type Value = string | boolean | undefined;

// Select's icon buttons have no default names, so every Select here must be given them.
const selectLabels = {
  en: { clear: 'Clear selection', expand: 'Show options', collapse: 'Hide options' },
};

// Defaults are recorded as source literals, e.g. `'primary'`.
const unquote = (value?: string) => value?.replace(/^'(.*)'$/, '$1');

// Controls are generated from the published types and built from TREDS itself.
// Only enum and boolean props get a control; ReactNode and handlers can't be edited as data.
export function Playground({
  component: Component,
  componentName,
  props,
  exclude = [],
  fixedProps = {},
  defaultChildren,
  lang,
}: {
  component: ComponentType<Record<string, unknown>>;
  componentName: string;
  props: PropMeta[];
  exclude?: string[];
  /** Always rendered and shown first in the code, e.g. a link's `href`. */
  fixedProps?: Record<string, string>;
  defaultChildren: string;
  lang: Lang;
}) {
  const editable = props.filter(
    (p) => !exclude.includes(p.name) && (p.values || p.type === 'boolean')
  );
  const [values, setValues] = useState<Record<string, Value>>({});
  const [children, setChildren] = useState(defaultChildren);
  const set = (name: string, value: Value) => setValues((v) => ({ ...v, [name]: value }));

  const attrs = Object.entries({ ...fixedProps, ...values })
    .filter(([, v]) => v !== undefined && v !== false)
    .map(([k, v]) => (v === true ? k : `${k}="${v}"`));
  const code = `<${componentName}${attrs.map((a) => ` ${a}`).join('')}>${children}</${componentName}>`;

  return (
    <div className="example">
      <div className="playground">
        <div className="example-preview">
          <Component {...fixedProps} {...values}>
            {children}
          </Component>
        </div>
        <div className="playground-controls">
          <TextField
            inputLabel="children"
            value={children}
            onChange={(e) => setChildren(e.currentTarget.value)}
          />
          {editable.map((p) =>
            p.values ? (
              <Select
                key={p.name}
                inputLabel={p.name}
                options={p.values}
                value={(values[p.name] as string | undefined) ?? unquote(p.defaultValue) ?? ''}
                onChange={(v) => set(p.name, v || undefined)}
                clearButtonLabel={`${selectLabels[lang].clear}: ${p.name}`}
                expandButtonLabel={`${selectLabels[lang].expand}: ${p.name}`}
                collapseButtonLabel={`${selectLabels[lang].collapse}: ${p.name}`}
              />
            ) : (
              <Checkbox
                key={p.name}
                label={p.name}
                checked={(values[p.name] as boolean | undefined) ?? p.defaultValue === 'true'}
                onChange={(e) => set(p.name, e.currentTarget.checked)}
              />
            )
          )}
        </div>
      </div>
      <CodeBlock>
        <pre className="code">
          <code>{code}</code>
        </pre>
      </CodeBlock>
    </div>
  );
}
