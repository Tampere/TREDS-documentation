'use client';

import { useState } from 'react';
import { Button, LoadingSpinner, Typography, vars } from '@tampere/treds';

export default function Status() {
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');

  function search() {
    if (state === 'loading') return;
    setState('loading');
    setTimeout(() => setState('done'), 2000);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: vars.primitives.spacing['2'],
      }}
    >
      <Button onClick={search}>Find events</Button>
      <div
        role="status"
        style={{ display: 'flex', alignItems: 'center', gap: vars.primitives.spacing['2'] }}
      >
        {state === 'loading' && (
          <>
            <span aria-hidden="true">
              <LoadingSpinner size="sm" />
            </span>
            <Typography variant="p1">Finding events…</Typography>
          </>
        )}
        {state === 'done' && <Typography variant="p1">Found 12 events.</Typography>}
      </div>
    </div>
  );
}
