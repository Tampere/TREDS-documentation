'use client';

import { useState } from 'react';
import { Checkbox, Fieldset, fieldsetSelectionGroup } from '@tampere/treds';

const options = [
  { value: 'early-education', label: 'Early childhood education' },
  { value: 'pre-primary', label: 'Pre-primary education' },
  { value: 'afternoon', label: 'Afternoon activities' },
];

export default function WithError() {
  const [selected, setSelected] = useState<string[]>([]);
  const invalid = selected.length === 0;

  return (
    <Fieldset
      legend="Which services is the application for?"
      showRequiredMarker
      helperText="Required. Choose at least one."
      error={invalid ? 'Choose at least one service.' : undefined}
    >
      <div className={fieldsetSelectionGroup}>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            name="services-error"
            value={option.value}
            label={option.label}
            checked={selected.includes(option.value)}
            onChange={(e) => {
              const checked = e.currentTarget.checked;
              setSelected((s) =>
                checked ? [...s, option.value] : s.filter((v) => v !== option.value)
              );
            }}
            error={invalid}
            aria-invalid={invalid}
          />
        ))}
      </div>
    </Fieldset>
  );
}
