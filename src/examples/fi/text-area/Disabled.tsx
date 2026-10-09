'use client';

import { TextArea } from '@tampere/treds';

export default function Disabled() {
  return (
    <TextArea
      inputLabel="Hakemuksen perustelut"
      value="Hakemus on lähetetty, eikä sitä voi enää muokata."
      disabled
    />
  );
}
