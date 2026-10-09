'use client';

import { Checkbox, Fieldset, fieldsetSelectionGroup } from '@tampere/treds';

export default function Hero() {
  return (
    <Fieldset legend="Mistä aiheista haluat uutiskirjeen?">
      <div className={fieldsetSelectionGroup}>
        <Checkbox name="aiheet" value="kulttuuri" label="Kulttuuri ja vapaa-aika" defaultChecked />
        <Checkbox name="aiheet" value="liikenne" label="Liikenne ja katutyöt" />
        <Checkbox name="aiheet" value="asuminen" label="Asuminen ja rakentaminen" />
      </div>
    </Fieldset>
  );
}
