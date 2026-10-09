'use client';

import { Breadcrumbs } from '@tampere/treds';

export default function Mobile() {
  return (
    <Breadcrumbs
      ariaLabel="Murupolku"
      isMobile
      items={[
        { label: 'Etusivu', href: '#etusivu' },
        { label: 'Asuminen', href: '#asuminen' },
        { label: 'Tontit' },
      ]}
    />
  );
}
