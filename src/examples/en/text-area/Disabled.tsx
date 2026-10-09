'use client';

import { TextArea } from '@tampere/treds';

export default function Disabled() {
  return (
    <TextArea
      inputLabel="Grounds for the application"
      value="The application has been submitted and can no longer be edited."
      disabled
    />
  );
}
