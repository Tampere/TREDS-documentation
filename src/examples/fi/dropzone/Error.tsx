'use client';

import { Dropzone } from '@tampere/treds';

export default function WithError() {
  return <Dropzone inputLabel="Liitteet" multiple error="Liitä vähintään yksi tiedosto." />;
}
