'use client';

import { Dropzone, type FileRejection } from '@tampere/treds';

function message(rejections: FileRejection[]) {
  const names = rejections.map((r) => r.file.name).join(', ');
  return `Näitä tiedostoja ei voitu lisätä: ${names}. Liitä vain PDF-tiedostoja.`;
}

export default function CustomMessage() {
  return (
    <Dropzone
      inputLabel="Pöytäkirjat"
      helperText="PDF-tiedostoja"
      multiple
      accept=".pdf"
      rejectionMessage={message}
    />
  );
}
