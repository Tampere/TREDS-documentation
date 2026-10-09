'use client';

import { Fieldset, TextField } from '@tampere/treds';

export default function Hero() {
  return (
    <Fieldset legend="Yhteystiedot">
      <TextField inputLabel="Nimi" autoComplete="name" />
      <TextField inputLabel="Sähköposti" type="email" autoComplete="email" />
      <TextField inputLabel="Puhelinnumero" type="tel" autoComplete="tel" />
    </Fieldset>
  );
}
