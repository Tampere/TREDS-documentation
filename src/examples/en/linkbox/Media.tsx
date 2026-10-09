'use client';

import { Linkbox } from '@tampere/treds';

export default function Media() {
  return (
    <Linkbox
      href="#beaches"
      title="Beaches"
      description="Beach locations and lifeguard hours."
      media={<img src="/examples/jarvimaisema.svg" alt="" />}
    />
  );
}
