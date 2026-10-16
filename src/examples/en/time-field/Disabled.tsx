'use client';

import { TimeField } from '@tampere/treds';

export default function Disabled() {
  return (
    <TimeField
      label="Arrival time"
      defaultValue="09:30"
      disabled
      pickerButtonLabel="Choose the arrival time"
    />
  );
}
