'use client';

import { useState } from 'react';
import { TimeField } from '@tampere/treds';

export default function WithError() {
  const [time, setTime] = useState('18:00');

  return (
    <TimeField
      label="Päättymisaika"
      value={time}
      onChange={setTime}
      max="16:00"
      outOfRangeError="Päättymisaika voi olla viimeistään klo 16.00."
      pickerButtonLabel="Valitse päättymisaika"
    />
  );
}
