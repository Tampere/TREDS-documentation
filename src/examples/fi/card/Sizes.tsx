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
      <Card size="md" title="Koko md">
        <Typography variant="p1">H3-otsikko ja keskikokoinen sisennys.</Typography>
      </Card>
      <Card size="sm" title="Koko sm">
        <Typography variant="p1">H3-otsikko ja pieni sisennys.</Typography>
      </Card>
    </div>
  );
}
