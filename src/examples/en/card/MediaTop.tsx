'use client';

import { Card, Typography } from '@tampere/treds';

export default function MediaTop() {
  return (
    <Card size="md" title="Beaches" media={<img src="/examples/jarvimaisema.svg" alt="" />}>
      <Typography variant="p1">The city's beaches have lifeguards from June to August.</Typography>
    </Card>
  );
}
