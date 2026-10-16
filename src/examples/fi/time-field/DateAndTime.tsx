'use client';

import { DateField, Fieldset, TimeField } from '@tampere/treds';

export default function DateAndTime() {
  return (
    <Fieldset legend="Ajanvaraus" showRequiredMarker>
      <DateField
        label="Päivä"
        required
        calendarButtonLabel="Valitse päivä kalenterista"
        prevMonthLabel="Edellinen kuukausi"
        nextMonthLabel="Seuraava kuukausi"
      />
      <TimeField
        label="Kellonaika"
        name="kellonaika"
        required
        min="08:00"
        max="16:00"
        stepMinutes={30}
        pickerButtonLabel="Valitse kellonaika"
      />
    </Fieldset>
  );
}
