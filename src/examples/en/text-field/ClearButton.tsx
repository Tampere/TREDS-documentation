'use client';

import { useRef, useState } from 'react';
import { TextField } from '@tampere/treds';

export default function ClearButton() {
  const [value, setValue] = useState('Hämeenkatu 1');
  const input = useRef<HTMLInputElement>(null);
  return (
    <TextField
      ref={input}
      inputLabel="Street address"
      autoComplete="street-address"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      showClearButton
      clearButtonLabel="Clear street address"
      onClearButtonClick={() => {
        setValue('');
        // The clear button disappears once the field is empty, so return focus to the field.
        input.current?.focus();
      }}
    />
  );
}
