'use client';

import { useState } from 'react';
import { TextArea } from '@tampere/treds';

export default function WithError() {
  const [value, setValue] = useState('');

  return (
    <TextArea
      inputLabel="Description of the damage"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      error="Describe the damage. Tell us at least what happened and where."
      required
    />
  );
}
