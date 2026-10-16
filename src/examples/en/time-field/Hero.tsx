'use client';

import { TimeField } from '@tampere/treds';

export default function Hero() {
  return (
    <TimeField
      label="Arrival time"
      helperText="Hours and minutes, for example 09:30"
      name="arrivalTime"
      pickerButtonLabel="Choose the arrival time"
      clearButtonLabel="Clear time"
      invalidTimeError="Enter the time as hours:minutes"
    />
  );
}
