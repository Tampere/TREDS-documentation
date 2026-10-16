'use client';

import { useState } from 'react';
import { Button, FileInput } from '@tampere/treds';

export default function Send() {
  const [files, setFiles] = useState<File[]>([]);
  const [sent, setSent] = useState('');

  function send() {
    const data = new FormData();
    files.forEach((file) => data.append('attachments', file));
    // fetch('/api/application', { method: 'POST', body: data });
    setSent(`Would send ${data.getAll('attachments').length} files.`);
  }

  return (
    <div style={{ display: 'grid', gap: '1rem', justifyItems: 'start' }}>
      <FileInput
        inputLabel="Attachments"
        multiple
        value={files}
        onChange={setFiles}
        buttonLabel="Choose files"
        placeholder="No files chosen"
        removeLabel="Remove file"
        selectedCountLabel={(count) => (count === 1 ? '1 file chosen' : `${count} files chosen`)}
      />
      <Button variant="secondary" onClick={send}>
        Send
      </Button>
      <p role="status">{sent}</p>
    </div>
  );
}
