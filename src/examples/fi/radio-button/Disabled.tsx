'use client';

import { useState } from 'react';
import { Fieldset, fieldsetSelectionGroup, RadioButton } from '@tampere/treds';

const options = [
  { value: 'pickup', label: 'Nouto palvelupisteestä' },
  { value: 'post', label: 'Postitus' },
  { value: 'courier', label: 'Kuljetus kotiin', disabled: true },
];

export default function Disabled() {
  const [value, setValue] = useState('pickup');

  return (
    <Fieldset legend="Toimitustapa" helperText="Kuljetus kotiin ei ole saatavilla osoitteeseesi.">
      <div className={fieldsetSelectionGroup}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name="toimitustapa"
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
