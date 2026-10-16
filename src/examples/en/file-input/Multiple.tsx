'use client';

import { FileInput, type FileRejection } from '@tampere/treds';

function rejectionMessage(rejections: FileRejection[]) {
  return rejections.some((r) => r.reason === 'type')
    ? 'Only JPG and PNG images are supported'
    : 'You can choose up to 3 files';
}

export default function Multiple() {
  return (
    <FileInput
      inputLabel="Photos"
      helperText="JPG or PNG images, up to 3"
      multiple
      maxFiles={3}
      accept="image/jpeg,image/png"
      buttonLabel="Choose files"
      placeholder="No files chosen"
      removeLabel="Remove file"
      selectedCountLabel={(count) => (count === 1 ? '1 file chosen' : `${count} files chosen`)}
      rejectionMessage={rejectionMessage}
    />
  );
}
