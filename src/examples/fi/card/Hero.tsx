'use client';

import { Button, Card, Typography } from '@tampere/treds';

export default function Hero() {
  return (
    <Card
      eyebrow="Kirjasto"
      title="Pääkirjasto Metso"
      actions={<Button variant="secondary">Varaa tila</Button>}
    >
      <Typography variant="p1">Metson ryhmätiloja voi varata kokouksiin ja opiskeluun.</Typography>
    </Card>
  );
}
