'use client';

import { useState } from 'react';
import { Button, FileInput } from '@tampere/treds';

export default function Send() {
  const [files, setFiles] = useState<File[]>([]);
  const [sent, setSent] = useState('');

  function send() {
    const data = new FormData();
    files.forEach((file) => data.append('liitteet', file));
    // fetch('/api/hakemus', { method: 'POST', body: data });
    setSent(`Lähetettäisiin ${data.getAll('liitteet').length} tiedostoa.`);
  }

  return (
    <div style={{ display: 'grid', gap: '1rem', justifyItems: 'start' }}>
      <FileInput inputLabel="Liitteet" multiple value={files} onChange={setFiles} />
      <Button variant="secondary" onClick={send}>
        Lähetä
      </Button>
      <p role="status">{sent}</p>
    </div>
  );
}
