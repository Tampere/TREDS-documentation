'use client';

import { useState } from 'react';
import { Fieldset, fieldsetSelectionGroup, RadioButton } from '@tampere/treds';

const options = [
  { value: 'email', label: 'Sähköpostilla' },
  { value: 'phone', label: 'Puhelimella' },
  { value: 'letter', label: 'Kirjeellä' },
];

export default function Hero() {
  const [value, setValue] = useState('email');

  return (
    <Fieldset legend="Miten haluat meidän ottavan yhteyttä?">
      <div className={fieldsetSelectionGroup}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name="yhteystapa"
            value={option.value}
            label={option.label}
            checked={value === option.value}
            onChange={() => setValue(option.value)}
          />
        ))}
      </div>
    </Fieldset>
  );
}
