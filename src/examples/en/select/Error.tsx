'use client';

import { Select } from '@tampere/treds';

export default function WithError() {
  return (
    <Select
      inputLabel="Language of service"
      required
      error="Choose a language of service."
      options={['Finnish', 'Swedish', 'English']}
      clearButtonLabel="Clear selection"
      expandButtonLabel="Show options"
      collapseButtonLabel="Hide options"
    />
  );
}
