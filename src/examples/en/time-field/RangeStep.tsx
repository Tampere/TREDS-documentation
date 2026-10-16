'use client';

import { TimeField } from '@tampere/treds';

export default function RangeStep() {
  return (
    <TimeField
      label="Start time"
      helperText="8 am–4 pm, in 15-minute steps"
      min="08:00"
      max="16:00"
      stepMinutes={15}
      pickerButtonLabel="Choose the start time"
      clearButtonLabel="Clear time"
      outOfRangeError="Choose a time between 8 am and 4 pm"
      stepMismatchError="Choose a time in 15-minute steps"
      invalidTimeError="Enter the time as hours:minutes"
    />
  );
}
