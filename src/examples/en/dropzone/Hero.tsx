'use client';

import { Dropzone, type FileRejection } from '@tampere/treds';

function rejectionMessage(rejections: FileRejection[]) {
  return rejections.some((r) => r.reason === 'type')
    ? 'This file type is not supported'
    : 'The file is too large (max. 10 MB)';
}

export default function Hero() {
  return (
    <Dropzone
      inputLabel="Attachments"
      helperText="PDF, JPG or PNG files, max. 10 MB each"
      multiple
      accept=".pdf,.jpg,.png"
      maxSize={10 * 1024 * 1024}
      title="Drop files here"
      buttonLabel="Choose files"
      placeholder="No files chosen"
      removeLabel="Remove file"
      selectedCountLabel={(count) => (count === 1 ? '1 file chosen' : `${count} files chosen`)}
      rejectionMessage={rejectionMessage}
    />
  );
}
