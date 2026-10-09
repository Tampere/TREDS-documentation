'use client';

import { TextField } from '@tampere/treds';

export default function WithError() {
  return (
    <TextField
      inputLabel="Email"
      type="email"
      defaultValue="name@"
      error="Check the email address. It should look like name@example.com."
    />
  );
}
