'use client';

import { TimeField } from '@tampere/treds';

export default function RangeStep() {
  return (
    <TimeField
      label="Aloitusaika"
      helperText="Klo 8–16, vartin välein"
      min="08:00"
      max="16:00"
      stepMinutes={15}
      pickerButtonLabel="Valitse aloitusaika"
    />
  );
}
