'use client';

import { Footer, TextLink, Typography } from '@tampere/treds';

export default function Extended() {
  return (
    <Footer
      accessibilityStatement={{ label: 'Saavutettavuusseloste', href: '#saavutettavuus' }}
      privacy={{ label: 'Tietosuoja', href: '#tietosuoja' }}
      columns={[
        <div key="yhteystiedot">
          <Typography variant="h5" component="h2">
            Yhteystiedot
          </Typography>
          <Typography variant="p2">Tampereen kaupunki, PL 487, 33101 Tampere</Typography>
        </div>,
        <div key="palaute">
          <Typography variant="h5" component="h2">
            Anna palautetta
          </Typography>
          <TextLink href="#palaute">Palautelomake</TextLink>
        </div>,
      ]}
      socialLinks={[
        { service: 'facebook', href: '#facebook' },
        { service: 'instagram', href: '#instagram' },
      ]}
    />
  );
}
