'use client';

import { TimeField } from '@tampere/treds';

export default function Hero() {
  return (
    <TimeField
      label="Saapumisaika"
      helperText="Tunnit ja minuutit, esimerkiksi 09.30"
      name="saapumisaika"
      pickerButtonLabel="Valitse saapumisaika"
    />
  );
}
