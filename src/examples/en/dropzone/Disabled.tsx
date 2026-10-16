'use client';

import { Dropzone } from '@tampere/treds';

export default function Disabled() {
  return (
    <Dropzone
      inputLabel="Attachments"
      helperText="The application has already been sent."
      disabled
      title="Drop files here"
      buttonLabel="Choose files"
      placeholder="No files chosen"
    />
  );
}
