'use client';

import { Card, Typography } from '@tampere/treds';

export default function MediaTop() {
  return (
    <Card size="md" title="Uimarannat" media={<img src="/examples/jarvimaisema.svg" alt="" />}>
      <Typography variant="p1">
        Kaupungin uimarannat ovat valvottuja kesäkuusta elokuuhun.
      </Typography>
    </Card>
  );
}
