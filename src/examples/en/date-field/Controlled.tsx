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
        label="Event date"
        value={date}
        onChange={setDate}
        placeholder="DD.MM.YYYY"
        calendarButtonLabel="Choose the event date from a calendar"
        clearButtonLabel="Clear date"
        calendarDialogLabel="Choose a date"
        yearLabel="Year"
        monthLabel="Month"
        todayLabel="Today"
        cancelLabel="Cancel"
        confirmLabel="Choose"
        formatDescription="Date format: day.month.year"
        prevMonthLabel="Previous month"
        nextMonthLabel="Next month"
      />
      <input type="hidden" name="eventDate" value={date ? isoDate(date) : ''} />
      <p>The form sends: {date ? isoDate(date) : '(empty)'}</p>
    </form>
  );
}
