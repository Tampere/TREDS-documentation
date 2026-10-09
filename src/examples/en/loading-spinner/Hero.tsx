'use client';

import { LoadingSpinner, Typography, vars } from '@tampere/treds';

export default function Hero() {
  return (
    <div
      role="status"
      style={{ display: 'flex', alignItems: 'center', gap: vars.primitives.spacing['2'] }}
    >
      <span aria-hidden="true">
        <LoadingSpinner />
      </span>
      <Typography variant="p1">Loading events…</Typography>
    </div>
  );
}
