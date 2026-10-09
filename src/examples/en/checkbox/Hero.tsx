'use client';

import { Checkbox, Fieldset, fieldsetSelectionGroup } from '@tampere/treds';

export default function Hero() {
  return (
    <Fieldset legend="Which topics do you want a newsletter about?">
      <div className={fieldsetSelectionGroup}>
        <Checkbox name="topics" value="culture" label="Culture and leisure" defaultChecked />
        <Checkbox name="topics" value="traffic" label="Traffic and street works" />
        <Checkbox name="topics" value="housing" label="Housing and construction" />
      </div>
    </Fieldset>
  );
}
