'use client';

import { Linkbox } from '@tampere/treds';

export default function Inverted() {
  return (
    <Linkbox
      href="#tapahtumat"
      title="Tapahtumat"
      description="Kaupungin tapahtumat tällä viikolla."
      inverted
    />
  );
}
