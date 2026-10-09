'use client';

import { Select } from '@tampere/treds';

export default function Disabled() {
  return (
    <Select
      inputLabel="Koulu"
      disabled
      options={['Hervannan koulu', 'Kalevan koulu']}
      clearButtonLabel="Tyhjennä valinta"
      expandButtonLabel="Näytä vaihtoehdot"
      collapseButtonLabel="Piilota vaihtoehdot"
    />
  );
}
