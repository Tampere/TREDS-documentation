'use client';

import { TextArea } from '@tampere/treds';

export default function Autosize() {
  return <TextArea inputLabel="Additional information" autosize minRows={3} maxRows={8} />;
}
