'use client';

import { Button } from '@tampere/treds';

export default function Disabled() {
  return (
    <>
      <Button disabled>Lähetä hakemus</Button>
      <Button variant="secondary" disabled>
        Tallenna luonnos
      </Button>
    </>
  );
}
