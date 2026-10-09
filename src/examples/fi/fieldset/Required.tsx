'use client';

import { Checkbox, Fieldset, fieldsetSelectionGroup } from '@tampere/treds';

export default function Required() {
  return (
    <Fieldset
      legend="Mihin palveluihin hakemus liittyy?"
      showRequiredMarker
      helperText="Pakollinen. Valitse vähintään yksi."
    >
      <div className={fieldsetSelectionGroup}>
        <Checkbox name="palvelut" value="varhaiskasvatus" label="Varhaiskasvatus" />
        <Checkbox name="palvelut" value="esiopetus" label="Esiopetus" />
        <Checkbox name="palvelut" value="iltapaivatoiminta" label="Iltapäivätoiminta" />
      </div>
    </Fieldset>
  );
}
