'use client';

import { Card, Typography } from '@tampere/treds';

export default function Background() {
  return (
    <Card size="md" title="Huomio" background="turquoise">
      <Typography variant="p1">Kortin teksti vaihtuu vaaleaksi värillisellä taustalla.</Typography>
    </Card>
  );
}
