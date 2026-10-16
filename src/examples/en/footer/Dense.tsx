'use client';

import { Footer } from '@tampere/treds';

export default function Dense() {
  return (
    <Footer
      variant="dense"
      copyrightText={`Copyright © City of Tampere ${new Date().getFullYear()}`}
      accessibilityStatement={{ label: 'Accessibility statement', href: '#accessibility' }}
    />
  );
}
