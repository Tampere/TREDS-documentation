'use client';

import { useRef, useState } from 'react';
import { TextField } from '@tampere/treds';

export default function ClearButton() {
  const [value, setValue] = useState('Hämeenkatu 1');
  const input = useRef<HTMLInputElement>(null);
  return (
    <TextField
      ref={input}
      inputLabel="Katuosoite"
      autoComplete="street-address"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      showClearButton
      clearButtonLabel="Tyhjennä katuosoite"
      onClearButtonClick={() => {
        setValue('');
        // Tyhjennyspainike poistuu, kun kenttä tyhjenee, joten palauta fokus kenttään.
        input.current?.focus();
      }}
    />
  );
}
