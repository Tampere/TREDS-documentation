'use client';

import { useState } from 'react';
import { Fieldset, fieldsetSelectionGroup, RadioButton } from '@tampere/treds';

const options = [
  { value: 'satisfied', label: 'Satisfied' },
  { value: 'neutral', label: 'Neither satisfied nor dissatisfied' },
  { value: 'dissatisfied', label: 'Dissatisfied' },
];

export default function WithError() {
  const [value, setValue] = useState('');
  const invalid = value === '';

  return (
    <Fieldset
      legend="How satisfied were you with the service?"
      error={invalid ? 'Choose one option.' : undefined}
    >
      <div className={fieldsetSelectionGroup}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name="satisfaction"
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
