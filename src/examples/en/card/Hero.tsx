'use client';

import { Button, Card, Typography } from '@tampere/treds';

export default function Hero() {
  return (
    <Card
      eyebrow="Library"
      title="Metso Main Library"
      actions={<Button variant="secondary">Book a room</Button>}
    >
      <Typography variant="p1">
        Metso's group rooms can be booked for meetings and studying.
      </Typography>
    </Card>
  );
}
