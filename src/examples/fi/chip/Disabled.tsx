'use client';

import { Chip } from '@tampere/treds';

export default function Disabled() {
  return (
    <>
      <Chip checked={false} onChange={() => {}} disabled>
        Ei käytettävissä
      </Chip>
      <Chip onRemove={() => {}} removeLabel="Poista lukittu" disabled>
        Lukittu
      </Chip>
    </>
  );
}
