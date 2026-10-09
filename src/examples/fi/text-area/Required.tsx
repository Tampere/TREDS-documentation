'use client';

import { TextArea } from '@tampere/treds';

export default function Required() {
  return <TextArea inputLabel="Kuvaus vahingosta" required />;
}
