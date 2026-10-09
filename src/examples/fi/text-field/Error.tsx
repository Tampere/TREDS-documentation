'use client';

import { TextField } from '@tampere/treds';

export default function WithError() {
  return (
    <TextField
      inputLabel="Sähköposti"
      type="email"
      defaultValue="nimi@"
      error="Tarkista sähköpostiosoite. Muoto on esimerkiksi nimi@esimerkki.fi."
    />
  );
}
