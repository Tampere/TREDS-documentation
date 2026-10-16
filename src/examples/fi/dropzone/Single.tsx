'use client';

import { Dropzone } from '@tampere/treds';

export default function Single() {
  return (
    <Dropzone
      inputLabel="Asemapiirros"
      helperText="Yksi PDF-tiedosto"
      title="Pudota tiedosto tähän"
      buttonLabel="Valitse tiedosto"
      accept=".pdf"
    />
  );
}
