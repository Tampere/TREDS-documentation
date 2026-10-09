'use client';

import { Linkbox, vars } from '@tampere/treds';

export default function Hero() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
        gap: vars.primitives.spacing['3'],
        width: '100%',
      }}
    >
      <Linkbox
        href="#asuminen"
        eyebrow="Palvelut"
        title="Asuminen"
        description="Vuokra-asunnot, tontit ja asumisneuvonta."
      />
      <Linkbox
        href="#liikenne"
        eyebrow="Palvelut"
        title="Liikenne"
        description="Joukkoliikenne, pysäköinti ja katutyöt."
      />
    </div>
  );
}
