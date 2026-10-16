'use client';

import { TimeField } from '@tampere/treds';

export default function Disabled() {
  return (
    <TimeField
      label="Saapumisaika"
      defaultValue="09:30"
      disabled
      pickerButtonLabel="Valitse saapumisaika"
    />
  );
}
