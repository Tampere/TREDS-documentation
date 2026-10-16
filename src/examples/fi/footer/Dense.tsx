'use client';

import { Footer } from '@tampere/treds';

export default function Dense() {
  return (
    <Footer
      variant="dense"
      accessibilityStatement={{ label: 'Saavutettavuusseloste', href: '#saavutettavuus' }}
    />
  );
}
