'use client';

import { DateField } from '@tampere/treds';

export default function Disabled() {
  return (
    <DateField
      label="Application received"
      value={new Date(2026, 8, 15)}
      disabled
      calendarButtonLabel="Choose a date from a calendar"
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
  );
}
