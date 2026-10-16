'use client';

import { FileInput, type FileRejection } from '@tampere/treds';

function rejectionMessage(rejections: FileRejection[]) {
  return rejections.some((r) => r.reason === 'type')
    ? 'This file type is not supported'
    : 'The file is too large (max. 5 MB)';
}

export default function Hero() {
  return (
    <FileInput
      inputLabel="Attachment"
      helperText="A PDF file, max. 5 MB"
      accept=".pdf"
      maxSize={5 * 1024 * 1024}
      buttonLabel="Choose file"
      placeholder="No file chosen"
      removeLabel="Remove file"
      rejectionMessage={rejectionMessage}
    />
  );
}
