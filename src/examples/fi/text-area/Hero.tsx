'use client';

import { TextArea } from '@tampere/treds';

export default function Hero() {
  return (
    <TextArea
      inputLabel="Palaute"
      helperText="Kerro, mitä asiasi koskee. Älä kirjoita henkilötunnusta."
      name="palaute"
    />
  );
}
