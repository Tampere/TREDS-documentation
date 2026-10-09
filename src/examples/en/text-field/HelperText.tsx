'use client';

import { TextField } from '@tampere/treds';

export default function HelperText() {
  return (
    <TextField
      inputLabel="Phone number"
      helperText="For example 040 123 4567"
      type="tel"
      autoComplete="tel"
    />
  );
}
