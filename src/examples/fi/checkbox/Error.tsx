'use client';

import { Checkbox, Fieldset, fieldsetSelectionGroup } from '@tampere/treds';

export default function WithError() {
  return (
    <Fieldset legend="Mistä aiheista haluat uutiskirjeen?" error="Valitse vähintään yksi aihe.">
      <div className={fieldsetSelectionGroup}>
        <Checkbox
          name="aiheet"
          value="kulttuuri"
          label="Kulttuuri ja vapaa-aika"
          error
          aria-invalid
        />
        <Checkbox name="aiheet" value="liikenne" label="Liikenne ja katutyöt" error aria-invalid />
      </div>
    </Fieldset>
  );
}
