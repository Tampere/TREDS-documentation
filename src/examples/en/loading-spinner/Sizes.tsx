'use client';

import { LoadingSpinner, vars } from '@tampere/treds';

export default function Sizes() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: vars.primitives.spacing['3'],
      }}
    >
      <LoadingSpinner size="xs" />
      <LoadingSpinner size="sm" />
      <LoadingSpinner size="md" />
      <LoadingSpinner size="lg" />
      <LoadingSpinner size="xl" />
    </div>
  );
}
