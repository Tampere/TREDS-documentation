'use client';

import { Linkbox } from '@tampere/treds';

export default function External() {
  return (
    <Linkbox
      href="https://www.nysse.fi/en/"
      title="Nysse"
      description="Public transport timetables and routes."
      external
      externalLabel="(opens in a new tab)"
    />
  );
}
