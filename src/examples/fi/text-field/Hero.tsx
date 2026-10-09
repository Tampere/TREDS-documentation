'use client';

import { TextField } from '@tampere/treds';

export default function Hero() {
  return (
    <TextField
      inputLabel="Sähköposti"
      helperText="Lähetämme vahvistuksen tähän osoitteeseen."
      type="email"
      autoComplete="email"
    />
  );
}
