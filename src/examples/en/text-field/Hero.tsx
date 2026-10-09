'use client';

import { TextField } from '@tampere/treds';

export default function Hero() {
  return (
    <TextField
      inputLabel="Email"
      helperText="We'll send a confirmation to this address."
      type="email"
      autoComplete="email"
    />
  );
}
