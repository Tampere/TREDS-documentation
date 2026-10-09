'use client';

import { useState } from 'react';
import { Select, Typography } from '@tampere/treds';

const areas = ['Hervanta', 'Kaleva', 'City centre', 'Lielahti', 'Tesoma'];

export default function Controlled() {
  const [value, setValue] = useState('');
  // onChange also fires while typing, so keep only values that are options.
  const selected = areas.includes(value) ? value : '';
  return (
    <div>
      <Select
        inputLabel="District"
        options={areas}
        value={value}
        onChange={setValue}
        clearButtonLabel="Clear selection"
        expandButtonLabel="Show options"
        collapseButtonLabel="Hide options"
      />
      <Typography variant="p2">Selected: {selected || 'nothing selected'}</Typography>
    </div>
  );
}
