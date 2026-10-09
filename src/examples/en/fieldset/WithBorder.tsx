'use client';

import { Fieldset, TextField } from '@tampere/treds';

export default function WithBorder() {
  return (
    <Fieldset legend="Billing address" withBorder>
      <TextField inputLabel="Street address" autoComplete="street-address" />
      <TextField inputLabel="Postcode" autoComplete="postal-code" />
      <TextField inputLabel="Town" autoComplete="address-level2" />
    </Fieldset>
  );
}
