'use client';

import { Button } from '@tampere/treds';

export default function Pill() {
  return (
    <>
      <Button radius="pill">Tallenna</Button>
      <Button variant="secondary" radius="pill">
        Peruuta
      </Button>
    </>
  );
}
