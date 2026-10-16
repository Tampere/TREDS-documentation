'use client';

import { Footer } from '@tampere/treds';

export default function Hero() {
  return (
    <Footer
      accessibilityStatement={{ label: 'Saavutettavuusseloste', href: '#saavutettavuus' }}
      privacy={{ label: 'Tietosuoja', href: '#tietosuoja' }}
      cookies={{ label: 'Evästeet', href: '#evasteet' }}
    />
  );
}
