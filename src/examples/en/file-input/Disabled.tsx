'use client';

import { FileInput } from '@tampere/treds';

export default function Disabled() {
  return (
    <FileInput
      inputLabel="Attachment"
      helperText="The application has already been sent."
      disabled
      buttonLabel="Choose file"
      placeholder="No file chosen"
    />
  );
}
