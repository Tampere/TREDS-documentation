'use client';

import { Footer, TextLink, Typography } from '@tampere/treds';

export default function Extended() {
  return (
    <Footer
      copyrightText={`Copyright © City of Tampere ${new Date().getFullYear()}`}
      backToTopLabel="Back to top"
      accessibilityStatement={{ label: 'Accessibility statement', href: '#accessibility' }}
      privacy={{ label: 'Privacy', href: '#privacy' }}
      columns={[
        <div key="contact">
          <Typography variant="h5" component="h2">
            Contact
          </Typography>
          <Typography variant="p2">City of Tampere, PO Box 487, 33101 Tampere</Typography>
        </div>,
        <div key="feedback">
          <Typography variant="h5" component="h2">
            Give feedback
          </Typography>
          <TextLink href="#feedback">Feedback form</TextLink>
        </div>,
      ]}
      socialLinks={[
        { service: 'facebook', href: '#facebook' },
        { service: 'instagram', href: '#instagram' },
      ]}
    />
  );
}
