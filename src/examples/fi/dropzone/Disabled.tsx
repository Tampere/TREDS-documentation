'use client';

import { Dropzone } from '@tampere/treds';

export default function Disabled() {
  return <Dropzone inputLabel="Liitteet" helperText="Hakemus on jo lähetetty." disabled />;
}
