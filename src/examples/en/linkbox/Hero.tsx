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
        href="#housing"
        eyebrow="Services"
        title="Housing"
        description="Rental housing, plots and housing advice."
      />
      <Linkbox
        href="#transport"
        eyebrow="Services"
        title="Transport"
        description="Public transport, parking and street works."
      />
    </div>
  );
}
