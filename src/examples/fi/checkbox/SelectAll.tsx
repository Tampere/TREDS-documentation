'use client';

import { useState } from 'react';
import { Checkbox, Fieldset, fieldsetSelectionGroup } from '@tampere/treds';

const days = ['Maanantai', 'Tiistai', 'Keskiviikko'];

export default function SelectAll() {
  const [selected, setSelected] = useState(['Maanantai']);
  const all = selected.length === days.length;
  const some = selected.length > 0 && !all;

  return (
    <Fieldset legend="Sopivat päivät">
      <div className={fieldsetSelectionGroup}>
        <Checkbox
          label="Kaikki päivät"
          checked={all}
          indeterminate={some}
          onChange={() => setSelected(all ? [] : days)}
        />
        {days.map((day) => (
          <Checkbox
            key={day}
            label={day}
            checked={selected.includes(day)}
            onChange={(e) => {
              const checked = e.currentTarget.checked;
              setSelected((s) => (checked ? [...s, day] : s.filter((d) => d !== day)));
            }}
          />
        ))}
      </div>
    </Fieldset>
  );
}
