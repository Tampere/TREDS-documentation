'use client';

import { Select } from '@tampere/treds';

export default function Disabled() {
  return (
    <Select
      inputLabel="School"
      disabled
      options={['Hervanta school', 'Kaleva school']}
      clearButtonLabel="Clear selection"
      expandButtonLabel="Show options"
      collapseButtonLabel="Hide options"
    />
  );
}
