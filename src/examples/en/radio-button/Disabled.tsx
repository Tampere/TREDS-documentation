'use client';

import { useState } from 'react';
import { Fieldset, fieldsetSelectionGroup, RadioButton } from '@tampere/treds';

const options = [
  { value: 'pickup', label: 'Pick up from a service point' },
  { value: 'post', label: 'By post' },
  { value: 'courier', label: 'Home delivery', disabled: true },
];

export default function Disabled() {
  const [value, setValue] = useState('pickup');

  return (
    <Fieldset legend="Delivery method" helperText="Home delivery isn't available at your address.">
      <div className={fieldsetSelectionGroup}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name="delivery"
            value={option.value}
            label={option.label}
            checked={value === option.value}
            onChange={() => setValue(option.value)}
            disabled={option.disabled}
          />
        ))}
      </div>
    </Fieldset>
  );
}
