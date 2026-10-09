'use client';

import { Select } from '@tampere/treds';

export default function Search() {
  return (
    <Select
      inputLabel="District"
      showSearchIcon
      noResultsMessage="No results"
      options={['Hervanta', 'Kaleva', 'City centre', 'Lielahti', 'Tesoma']}
      clearButtonLabel="Clear selection"
      expandButtonLabel="Show options"
      collapseButtonLabel="Hide options"
    />
  );
}
