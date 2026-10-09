'use client';

import { useState } from 'react';
import { Checkbox, Fieldset, fieldsetSelectionGroup } from '@tampere/treds';

const options = [
  { value: 'varhaiskasvatus', label: 'Varhaiskasvatus' },
  { value: 'esiopetus', label: 'Esiopetus' },
  { value: 'iltapaivatoiminta', label: 'Iltapäivätoiminta' },
];

export default function WithError() {
  const [selected, setSelected] = useState<string[]>([]);
  const invalid = selected.length === 0;

  return (
    <Fieldset
      legend="Mihin palveluihin hakemus liittyy?"
      showRequiredMarker
      helperText="Pakollinen. Valitse vähintään yksi."
      error={invalid ? 'Valitse vähintään yksi palvelu.' : undefined}
    >
      <div className={fieldsetSelectionGroup}>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            name="palvelut-virhe"
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
