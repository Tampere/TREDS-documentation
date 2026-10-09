'use client';

import { TextField } from '@tampere/treds';

export default function Required() {
  return <TextField inputLabel="Nimi" required autoComplete="name" />;
}
