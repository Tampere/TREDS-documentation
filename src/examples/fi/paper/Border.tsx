'use client';

import { Paper, Typography } from '@tampere/treds';

export default function Border() {
  return (
    <Paper withBorder withShadow={false}>
      <Typography variant="p1">
        Reunus ilman varjoa sopii sisällön ryhmittelyyn sivun sisällä.
      </Typography>
    </Paper>
  );
}
