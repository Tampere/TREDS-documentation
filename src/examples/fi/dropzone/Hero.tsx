'use client';

import { Dropzone } from '@tampere/treds';

export default function Hero() {
  return (
    <Dropzone
      inputLabel="Liitteet"
      helperText="PDF-, JPG- tai PNG-tiedostoja, kukin enintään 10 MB"
      multiple
      accept=".pdf,.jpg,.png"
      maxSize={10 * 1024 * 1024}
    />
  );
}
