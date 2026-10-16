'use client';

import { SearchField } from '@tampere/treds';

export default function NoVisibleLabel() {
  return (
    <SearchField
      aria-label="Hae sivustolta"
      data={[]}
      onSearch={() => {}}
      clearButtonLabel="Tyhjennä haku"
      searchButtonLabel="Hae"
      fillAvailableSpace
    />
  );
}
