'use client';

import { Linkbox } from '@tampere/treds';

export default function External() {
  return (
    <Linkbox
      href="https://www.nysse.fi/"
      title="Nysse"
      description="Joukkoliikenteen aikataulut ja reitit."
      external
    />
  );
}
