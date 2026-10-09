'use client';

import { Checkbox, Fieldset, fieldsetSelectionGroup } from '@tampere/treds';

export default function Required() {
  return (
    <Fieldset
      legend="Which services is the application for?"
      showRequiredMarker
      helperText="Required. Choose at least one."
    >
      <div className={fieldsetSelectionGroup}>
        <Checkbox name="services" value="early-education" label="Early childhood education" />
        <Checkbox name="services" value="pre-primary" label="Pre-primary education" />
        <Checkbox name="services" value="afternoon" label="Afternoon activities" />
      </div>
    </Fieldset>
  );
}
