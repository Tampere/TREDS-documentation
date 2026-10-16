'use client';

import { FileInput } from '@tampere/treds';

export default function Disabled() {
  return <FileInput inputLabel="Liite" helperText="Hakemus on jo lähetetty." disabled />;
}
