'use client';

import { Breadcrumbs } from '@tampere/treds';

export default function Hero() {
  return (
    <Breadcrumbs
      ariaLabel="Breadcrumb"
      items={[
        { label: 'Home', href: '#home' },
        { label: 'Housing', href: '#housing' },
        { label: 'Plots' },
      ]}
    />
  );
}
