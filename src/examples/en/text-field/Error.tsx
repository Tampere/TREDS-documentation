'use client';

import { useState } from 'react';
import { TextField } from '@tampere/treds';

export default function WithError() {
  const [value, setValue] = useState('name@');

  return (
    <TextField
      inputLabel="Email"
      type="email"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      error="Check the email address. It should look like name@example.com."
    />
  );
}
