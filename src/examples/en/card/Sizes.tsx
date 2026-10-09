'use client';

import { Card, Typography, vars } from '@tampere/treds';

export default function Sizes() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
        gap: vars.primitives.spacing['3'],
        width: '100%',
      }}
    >
      <Card size="md" title="Size md">
        <Typography variant="p1">An H3 heading and medium padding.</Typography>
      </Card>
      <Card size="sm" title="Size sm">
        <Typography variant="p1">An H3 heading and small padding.</Typography>
      </Card>
    </div>
  );
}
