'use client';

import { Dropzone } from '@tampere/treds';

export default function Single() {
  return (
    <Dropzone
      inputLabel="Site plan"
      helperText="One PDF file"
      title="Drop the file here"
      buttonLabel="Choose file"
      placeholder="No file chosen"
      removeLabel="Remove file"
      accept=".pdf"
      rejectionMessage={() => 'Only PDF files are supported'}
    />
  );
}
