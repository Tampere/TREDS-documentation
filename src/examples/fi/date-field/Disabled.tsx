'use client';

import { DateField } from '@tampere/treds';

export default function Disabled() {
  return (
    <DateField
      label="Hakemuksen saapumispäivä"
      value={new Date(2026, 8, 15)}
      disabled
      calendarButtonLabel="Valitse päivä kalenterista"
      prevMonthLabel="Edellinen kuukausi"
      nextMonthLabel="Seuraava kuukausi"
    />
  );
}
