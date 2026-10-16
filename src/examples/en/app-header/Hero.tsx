'use client';

import { AppHeader } from '@tampere/treds';

export default function Hero() {
  return (
    <AppHeader
      siteName="e-Services"
      homeHref="/"
      navAriaLabel="Main menu"
      navigation={[
        { label: 'Applications', href: '#applications', isSelected: true },
        { label: 'Invoices', href: '#invoices' },
        { label: 'Help', href: '#help' },
      ]}
      languages={[
        { code: 'fi', label: 'Suomi', href: '#fi' },
        { code: 'sv', label: 'Svenska', href: '#sv' },
        { code: 'en', label: 'English', href: '#en' },
      ]}
      currentLanguage="en"
      languagesAriaLabel="Language"
      menuButtonLabel="Menu"
      login={{ label: 'Log in', href: '#login' }}
    />
  );
}
