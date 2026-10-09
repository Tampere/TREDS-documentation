'use client';

import { useState } from 'react';
import { TextArea } from '@tampere/treds';

export default function WithError() {
  const [value, setValue] = useState('');

  return (
    <TextArea
      inputLabel="Kuvaus vahingosta"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      error="Kirjoita kuvaus vahingosta. Kerro ainakin, mitä tapahtui ja missä."
      required
    />
  );
}
