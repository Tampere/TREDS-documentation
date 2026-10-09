'use client';

import { Breadcrumbs } from '@tampere/treds';

export default function Mobile() {
  return (
    <Breadcrumbs
      ariaLabel="Breadcrumb"
      isMobile
      items={[
        { label: 'Home', href: '#home' },
        { label: 'Housing', href: '#housing' },
        { label: 'Plots' },
      ]}
    />
  );
}
