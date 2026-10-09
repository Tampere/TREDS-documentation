'use client';

import { useState } from 'react';
import { Fieldset, fieldsetSelectionGroup, RadioButton } from '@tampere/treds';

const options = [
  { value: 'tyytyvainen', label: 'Tyytyväinen' },
  { value: 'neutraali', label: 'En tyytyväinen enkä tyytymätön' },
  { value: 'tyytymaton', label: 'Tyytymätön' },
];

export default function WithError() {
  const [value, setValue] = useState('');
  const invalid = value === '';

  return (
    <Fieldset
      legend="Kuinka tyytyväinen olit palveluun?"
      error={invalid ? 'Valitse yksi vaihtoehto.' : undefined}
    >
      <div className={fieldsetSelectionGroup}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name="tyytyvaisyys"
            value={option.value}
            label={option.label}
            checked={value === option.value}
            onChange={() => setValue(option.value)}
            error={invalid}
            aria-invalid={invalid}
          />
        ))}
      </div>
    </Fieldset>
  );
}
