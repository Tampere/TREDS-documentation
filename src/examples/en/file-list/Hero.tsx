'use client';

import { useRef, useState } from 'react';
import { Button, FileList } from '@tampere/treds';

const saved = [
  new File(['…'], 'building-permit-application.pdf', {
    type: 'application/pdf',
  }),
  new File(['…'], 'site-plan.pdf', { type: 'application/pdf' }),
  new File(['…'], 'south-facade.png', { type: 'image/png' }),
];

export default function Hero() {
  const [files, setFiles] = useState(saved);
  const addRef = useRef<HTMLButtonElement>(null);

  return (
    <div style={{ display: 'grid', gap: '1rem', width: '100%' }}>
      <FileList
        files={files}
        onRemove={(index) => setFiles((current) => current.filter((_, i) => i !== index))}
        onEmptied={() => addRef.current?.focus()}
        removeLabel="Remove file"
      />
      <div>
        <Button ref={addRef} variant="secondary" onClick={() => setFiles(saved)}>
          Restore files
        </Button>
      </div>
    </div>
  );
}
