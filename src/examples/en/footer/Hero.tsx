'use client';

import { Footer } from '@tampere/treds';

export default function Hero() {
  return (
    <Footer
      copyrightText={`Copyright © City of Tampere ${new Date().getFullYear()}`}
      backToTopLabel="Back to top"
      accessibilityStatement={{ label: 'Accessibility statement', href: '#accessibility' }}
      privacy={{ label: 'Privacy', href: '#privacy' }}
      cookies={{ label: 'Cookies', href: '#cookies' }}
    />
  );
}
