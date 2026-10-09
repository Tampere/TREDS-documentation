'use client';

import { Checkbox, Fieldset, fieldsetSelectionGroup } from '@tampere/treds';

export default function WithError() {
  return (
    <Fieldset
      legend="Which topics do you want a newsletter about?"
      error="Choose at least one topic."
    >
      <div className={fieldsetSelectionGroup}>
        <Checkbox name="topics" value="culture" label="Culture and leisure" error aria-invalid />
        <Checkbox
          name="topics"
          value="traffic"
          label="Traffic and street works"
          error
          aria-invalid
        />
      </div>
    </Fieldset>
  );
}
