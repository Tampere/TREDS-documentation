'use client';

import { Select } from '@tampere/treds';

export default function Search() {
  return (
    <Select
      inputLabel="Kaupunginosa"
      showSearchIcon
      noResultsMessage="Ei hakutuloksia"
      options={['Hervanta', 'Kaleva', 'Keskusta', 'Lielahti', 'Tesoma']}
      clearButtonLabel="Tyhjennä valinta"
      expandButtonLabel="Näytä vaihtoehdot"
      collapseButtonLabel="Piilota vaihtoehdot"
    />
  );
}
