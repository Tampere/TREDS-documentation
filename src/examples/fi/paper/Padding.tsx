'use client';

import { Paper, Typography } from '@tampere/treds';

export default function Padding() {
  return (
    <>
      <Paper padding="sm">
        <Typography variant="p2">sm</Typography>
      </Paper>
      <Paper padding="md">
        <Typography variant="p2">md</Typography>
      </Paper>
      <Paper padding="lg">
        <Typography variant="p2">lg</Typography>
      </Paper>
    </>
  );
}
