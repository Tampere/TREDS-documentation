'use client';

import { AppHeader, HelpIcon, UserIcon } from '@tampere/treds';

export default function Actions() {
  return (
    <AppHeader
      siteName="Asiointi"
      navAriaLabel="Päävalikko"
      navigation={[
        { label: 'Hakemukset', href: '#hakemukset' },
        { label: 'Laskut', href: '#laskut' },
      ]}
      actions={[{ label: 'Ohjeet', icon: <HelpIcon />, href: '#ohjeet' }]}
      login={{ label: 'Maija Meikäläinen', icon: <UserIcon />, href: '#oma-tili' }}
    />
  );
}
