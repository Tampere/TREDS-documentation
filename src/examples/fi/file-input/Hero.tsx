'use client';

import { FileInput } from '@tampere/treds';

export default function Hero() {
  return (
    <FileInput
      inputLabel="Liite"
      helperText="PDF-tiedosto, enintään 5 MB"
      accept=".pdf"
      maxSize={5 * 1024 * 1024}
    />
  );
}
