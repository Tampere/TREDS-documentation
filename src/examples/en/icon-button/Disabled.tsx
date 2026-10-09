'use client';

import { EditIcon, IconButton } from '@tampere/treds';

export default function Disabled() {
  return (
    <IconButton size="md" aria-label="Edit" disabled>
      <EditIcon />
    </IconButton>
  );
}
