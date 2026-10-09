'use client';

import { Select } from '@tampere/treds';

export default function HelperRequired() {
  return (
    <Select
      inputLabel="Asiointikieli"
      helperText="Lähetämme päätöksen tällä kielellä."
      required
      options={['suomi', 'ruotsi', 'englanti']}
      clearButtonLabel="Tyhjennä valinta"
      expandButtonLabel="Näytä vaihtoehdot"
      collapseButtonLabel="Piilota vaihtoehdot"
    />
  );
}
