'use client';

import { Dropzone, type FileRejection } from '@tampere/treds';

function message(rejections: FileRejection[]) {
  const names = rejections.map((r) => r.file.name).join(', ');
  return `These files could not be added: ${names}. Attach PDF files only.`;
}

export default function CustomMessage() {
  return (
    <Dropzone
      inputLabel="Minutes"
      helperText="PDF files"
      multiple
      accept=".pdf"
      title="Drop files here"
      buttonLabel="Choose files"
      placeholder="No files chosen"
      removeLabel="Remove file"
      selectedCountLabel={(count) => (count === 1 ? '1 file chosen' : `${count} files chosen`)}
      rejectionMessage={message}
    />
  );
}
