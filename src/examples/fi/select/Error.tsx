'use client';

import { Select } from '@tampere/treds';

export default function WithError() {
  return (
    <Select
      inputLabel="Asiointikieli"
      required
      error="Valitse asiointikieli."
      options={['suomi', 'ruotsi', 'englanti']}
      clearButtonLabel="Tyhjennä valinta"
      expandButtonLabel="Näytä vaihtoehdot"
      collapseButtonLabel="Piilota vaihtoehdot"
    />
  );
}
