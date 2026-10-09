'use client';

import { Select } from '@tampere/treds';

export default function HelperRequired() {
  return (
    <Select
      inputLabel="Language of service"
      helperText="We'll send the decision in this language."
      required
      options={['Finnish', 'Swedish', 'English']}
      clearButtonLabel="Clear selection"
      expandButtonLabel="Show options"
      collapseButtonLabel="Hide options"
    />
  );
}
