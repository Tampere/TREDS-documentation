'use client';

import { FileList } from '@tampere/treds';

const files = [new File(['…'], 'rakennuslupahakemus.pdf', { type: 'application/pdf' })];

export default function Disabled() {
  return <FileList files={files} onRemove={() => {}} disabled />;
}
