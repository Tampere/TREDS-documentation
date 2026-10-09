'use client';

import { Select } from '@tampere/treds';

export default function Hero() {
  return (
    <Select
      inputLabel="District"
      placeholder="Choose a district"
      options={['Hervanta', 'Kaleva', 'City centre', 'Lielahti', 'Tesoma']}
      clearButtonLabel="Clear selection"
      expandButtonLabel="Show options"
      collapseButtonLabel="Hide options"
    />
  );
}
