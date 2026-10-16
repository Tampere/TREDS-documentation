'use client';

import { useRef, useState } from 'react';
import { Button, FileList } from '@tampere/treds';

const saved = [
  new File(['…'], 'rakennuslupahakemus.pdf', { type: 'application/pdf' }),
  new File(['…'], 'asemapiirros.pdf', { type: 'application/pdf' }),
  new File(['…'], 'julkisivu-etelaan.png', { type: 'image/png' }),
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
      />
      <div>
        <Button ref={addRef} variant="secondary" onClick={() => setFiles(saved)}>
          Palauta tiedostot
        </Button>
      </div>
    </div>
  );
}
