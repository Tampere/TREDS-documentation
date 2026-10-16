'use client';

import { SearchField } from '@tampere/treds';

export default function NoVisibleLabel() {
  return (
    <SearchField
      aria-label="Search the site"
      data={[]}
      onSearch={() => {}}
      clearButtonLabel="Clear search"
      searchButtonLabel="Search"
      fillAvailableSpace
    />
  );
}
