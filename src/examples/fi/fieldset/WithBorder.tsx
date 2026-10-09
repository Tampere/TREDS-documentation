'use client';

import { Fieldset, TextField } from '@tampere/treds';

export default function WithBorder() {
  return (
    <Fieldset legend="Laskutusosoite" withBorder>
      <TextField inputLabel="Katuosoite" autoComplete="street-address" />
      <TextField inputLabel="Postinumero" autoComplete="postal-code" />
      <TextField inputLabel="Postitoimipaikka" autoComplete="address-level2" />
    </Fieldset>
  );
}
