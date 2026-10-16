'use client';

import { DateField } from '@tampere/treds';

export default function Required() {
  return (
    <DateField
      label="Syntymäaika"
      required
      calendarButtonLabel="Valitse syntymäaika kalenterista"
      prevMonthLabel="Edellinen kuukausi"
      nextMonthLabel="Seuraava kuukausi"
    />
  );
}
