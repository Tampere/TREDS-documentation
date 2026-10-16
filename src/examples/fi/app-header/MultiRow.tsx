'use client';

import { AppHeader, SearchField } from '@tampere/treds';

export default function MultiRow() {
  return (
    <AppHeader
      layout="multi-row"
      siteName="Kirjastot"
      navAriaLabel="Päävalikko"
      navigation={[
        { label: 'Aineistot', href: '#aineistot' },
        { label: 'Tapahtumat', href: '#tapahtumat' },
        { label: 'Kirjastot', href: '#kirjastot' },
      ]}
      secondaryNavigation={[{ label: 'Yhteystiedot', href: '#yhteystiedot' }]}
      languages={[
        { code: 'fi', label: 'Suomi', href: '#fi' },
        { code: 'en', label: 'English', href: '#en' },
      ]}
      currentLanguage="fi"
      search={
        <SearchField
          aria-label="Hae kirjastojen sivuilta"
          data={[]}
          onSearch={() => {}}
          clearButtonLabel="Tyhjennä haku"
          searchButtonLabel="Hae"
          fillAvailableSpace
        />
      }
    />
  );
}
