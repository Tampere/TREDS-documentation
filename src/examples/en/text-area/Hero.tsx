'use client';

import { TextArea } from '@tampere/treds';

export default function Hero() {
  return (
    <TextArea
      inputLabel="Feedback"
      helperText="Tell us what your matter is about. Don't include your personal identity code."
      name="feedback"
    />
  );
}
