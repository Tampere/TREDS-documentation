'use client';

import { Card, Typography } from '@tampere/treds';

export default function Background() {
  return (
    <Card size="md" title="Note" background="turquoise">
      <Typography variant="p1">The card's text turns light on a coloured background.</Typography>
    </Card>
  );
}
