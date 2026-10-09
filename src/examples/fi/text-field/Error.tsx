'use client';

import { useState } from 'react';
import { TextField } from '@tampere/treds';

export default function WithError() {
  const [value, setValue] = useState('nimi@');

  return (
    <TextField
      inputLabel="Sähköposti"
      type="email"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      error="Tarkista sähköpostiosoite. Muoto on esimerkiksi nimi@esimerkki.fi."
    />
  );
}
