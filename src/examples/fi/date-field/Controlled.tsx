'use client';

import { useState } from 'react';
import { DateField } from '@tampere/treds';

function isoDate(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export default function Controlled() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <form style={{ display: 'grid', gap: '1rem' }}>
      <DateField
        label="Tapahtumapäivä"
        value={date}
        onChange={setDate}
        calendarButtonLabel="Valitse tapahtumapäivä kalenterista"
        prevMonthLabel="Edellinen kuukausi"
        nextMonthLabel="Seuraava kuukausi"
      />
      <input type="hidden" name="tapahtumapaiva" value={date ? isoDate(date) : ''} />
      <p>Lomake lähettää: {date ? isoDate(date) : '(tyhjä)'}</p>
    </form>
  );
}
