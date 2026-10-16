'use client';

import { AppHeader, HelpIcon, UserIcon } from '@tampere/treds';

export default function Actions() {
  return (
    <AppHeader
      siteName="e-Services"
      navAriaLabel="Main menu"
      navigation={[
        { label: 'Applications', href: '#applications' },
        { label: 'Invoices', href: '#invoices' },
      ]}
      menuButtonLabel="Menu"
      actions={[{ label: 'Help', icon: <HelpIcon />, href: '#help' }]}
      login={{ label: 'Jane Doe', icon: <UserIcon />, href: '#my-account' }}
    />
  );
}
