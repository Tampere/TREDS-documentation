'use client';

import { DateField } from '@tampere/treds';

const today = new Date();
const inSixMonths = new Date(today.getFullYear(), today.getMonth() + 6, today.getDate());

export default function Range() {
  return (
    <DateField
      label="Varauspäivä"
      helperText="Voit varata enintään puoli vuotta etukäteen."
      min={today}
      max={inSixMonths}
      calendarButtonLabel="Valitse varauspäivä kalenterista"
      prevMonthLabel="Edellinen kuukausi"
      nextMonthLabel="Seuraava kuukausi"
    />
  );
}
