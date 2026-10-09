'use client';

import { useState } from 'react';
import { Fieldset, fieldsetSelectionGroup, RadioButton } from '@tampere/treds';

const options = [
  { value: 'email', label: 'By email' },
  { value: 'phone', label: 'By phone' },
  { value: 'letter', label: 'By letter' },
];

export default function Hero() {
  const [value, setValue] = useState('email');

  return (
    <Fieldset legend="How would you like us to contact you?">
      <div className={fieldsetSelectionGroup}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name="contact"
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
