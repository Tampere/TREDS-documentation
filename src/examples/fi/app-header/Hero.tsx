'use client';

import { AppHeader } from '@tampere/treds';

export default function Hero() {
  return (
    <AppHeader
      siteName="Asiointi"
      homeHref="/"
      navAriaLabel="Päävalikko"
      navigation={[
        { label: 'Hakemukset', href: '#hakemukset', isSelected: true },
        { label: 'Laskut', href: '#laskut' },
        { label: 'Ohjeet', href: '#ohjeet' },
      ]}
      languages={[
        { code: 'fi', label: 'FI', href: '#fi' },
        { code: 'sv', label: 'SV', href: '#sv' },
        { code: 'en', label: 'EN', href: '#en' },
      ]}
      currentLanguage="fi"
      login={{ label: 'Kirjaudu', href: '#kirjaudu' }}
    />
  );
}
