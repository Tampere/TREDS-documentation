'use client';

import { Linkbox } from '@tampere/treds';

export default function Media() {
  return (
    <Linkbox
      href="#uimarannat"
      title="Uimarannat"
      description="Rantojen sijainnit ja valvonta-ajat."
      media={<img src="/examples/jarvimaisema.svg" alt="" />}
    />
  );
}
