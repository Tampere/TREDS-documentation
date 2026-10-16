'use client';

import { useState } from 'react';
import { TimeField } from '@tampere/treds';

export default function WithError() {
  const [time, setTime] = useState('18:00');

  return (
    <TimeField
      label="End time"
      value={time}
      onChange={setTime}
      max="16:00"
      outOfRangeError="The end time can be 4 pm at the latest."
      pickerButtonLabel="Choose the end time"
      clearButtonLabel="Clear time"
    />
  );
}
