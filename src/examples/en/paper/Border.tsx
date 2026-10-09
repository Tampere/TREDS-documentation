'use client';

import { Paper, Typography } from '@tampere/treds';

export default function Border() {
  return (
    <Paper withBorder withShadow={false}>
      <Typography variant="p1">
        A border without a shadow suits grouping content within a page.
      </Typography>
    </Paper>
  );
}
