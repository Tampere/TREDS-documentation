'use client';

import { Breadcrumbs } from '@tampere/treds';

export default function Hero() {
  return (
    <Breadcrumbs
      ariaLabel="Murupolku"
      items={[
        { label: 'Etusivu', href: '#etusivu' },
        { label: 'Asuminen', href: '#asuminen' },
        { label: 'Tontit' },
      ]}
    />
  );
}
