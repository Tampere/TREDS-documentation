'use client';

import { FileList } from '@tampere/treds';

const files = [
  new File(['…'], 'building-permit-application.pdf', {
    type: 'application/pdf',
  }),
];

export default function Disabled() {
  return <FileList files={files} onRemove={() => {}} removeLabel="Remove file" disabled />;
}
