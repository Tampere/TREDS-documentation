'use client';

import { Card, Typography } from '@tampere/treds';

export default function MediaLeft() {
  return (
    <Card
      size="md"
      title="Beaches"
      media={<img src="/examples/jarvimaisema.svg" alt="" />}
      mediaPlacement="left"
    >
      <Typography variant="p1">The city's beaches have lifeguards from June to August.</Typography>
    </Card>
  );
}
