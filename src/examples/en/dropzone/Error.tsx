'use client';

import { Dropzone } from '@tampere/treds';

export default function WithError() {
  return (
    <Dropzone
      inputLabel="Attachments"
      multiple
      error="Attach at least one file."
      title="Drop files here"
      buttonLabel="Choose files"
      placeholder="No files chosen"
    />
  );
}
