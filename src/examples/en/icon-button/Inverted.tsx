'use client';

import { CloseIcon, IconButton, vars } from '@tampere/treds';

export default function Inverted() {
  return (
    <div style={{ background: vars.brand.blue.mainDark, padding: vars.primitives.spacing['2'] }}>
      <IconButton size="md" variant="inverted" aria-label="Close">
        <CloseIcon />
      </IconButton>
    </div>
  );
}
