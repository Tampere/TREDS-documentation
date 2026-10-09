'use client';

import { Chip } from '@tampere/treds';

export default function Disabled() {
  return (
    <>
      <Chip checked={false} onChange={() => {}} disabled>
        Unavailable
      </Chip>
      <Chip onRemove={() => {}} removeLabel="Remove locked" disabled>
        Locked
      </Chip>
    </>
  );
}
