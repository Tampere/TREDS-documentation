'use client';

import { FileInput } from '@tampere/treds';

export default function WithError() {
  return (
    <FileInput
      inputLabel="Attachment"
      error="The upload failed. Please try again."
      buttonLabel="Choose file"
      placeholder="No file chosen"
    />
  );
}
