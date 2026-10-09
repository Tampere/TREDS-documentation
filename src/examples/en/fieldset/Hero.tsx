'use client';

import { Fieldset, TextField } from '@tampere/treds';

export default function Hero() {
  return (
    <Fieldset legend="Contact details">
      <TextField inputLabel="Name" autoComplete="name" />
      <TextField inputLabel="Email" type="email" autoComplete="email" />
      <TextField inputLabel="Phone number" type="tel" autoComplete="tel" />
    </Fieldset>
  );
}
