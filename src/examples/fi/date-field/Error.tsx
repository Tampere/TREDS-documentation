'use client';

import { DateField } from '@tampere/treds';

export default function WithError() {
  return (
    <DateField
      label="Muuttopäivä"
      error="Anna muuttopäivä. Se voi olla enintään kuukauden päässä."
      required
      calendarButtonLabel="Valitse muuttopäivä kalenterista"
      prevMonthLabel="Edellinen kuukausi"
      nextMonthLabel="Seuraava kuukausi"
    />
  );
}
