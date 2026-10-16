'use client';

import { DateField } from '@tampere/treds';

export default function Hero() {
  return (
    <DateField
      label="Muuttopäivä"
      helperText="Esimerkiksi 1.8.2026"
      calendarButtonLabel="Valitse muuttopäivä kalenterista"
      prevMonthLabel="Edellinen kuukausi"
      nextMonthLabel="Seuraava kuukausi"
    />
  );
}
