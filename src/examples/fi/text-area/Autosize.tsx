'use client';

import { TextArea } from '@tampere/treds';

export default function Autosize() {
  return <TextArea inputLabel="Lisätiedot" autosize minRows={3} maxRows={8} />;
}
