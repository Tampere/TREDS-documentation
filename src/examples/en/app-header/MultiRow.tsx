'use client';

import { AppHeader, SearchField } from '@tampere/treds';

export default function MultiRow() {
  return (
    <AppHeader
      layout="multi-row"
      siteName="Libraries"
      navAriaLabel="Main menu"
      navigation={[
        { label: 'Collections', href: '#collections' },
        { label: 'Events', href: '#events' },
        { label: 'Libraries', href: '#libraries' },
      ]}
      secondaryNavigation={[{ label: 'Contact', href: '#contact' }]}
      secondaryNavAriaLabel="Secondary navigation"
      languages={[
        { code: 'fi', label: 'FI', href: '#fi' },
        { code: 'en', label: 'EN', href: '#en' },
      ]}
      currentLanguage="en"
      languagesAriaLabel="Language"
      menuButtonLabel="Menu"
      search={
        <SearchField
          aria-label="Search the library pages"
          data={[]}
          onSearch={() => {}}
          clearButtonLabel="Clear search"
          searchButtonLabel="Search"
          fillAvailableSpace
        />
      }
    />
  );
}
