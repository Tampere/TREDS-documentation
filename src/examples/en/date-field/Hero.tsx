'use client';

import { DateField } from '@tampere/treds';

export default function Hero() {
  return (
    <DateField
      label="Moving date"
      helperText="For example 1.8.2026"
      placeholder="DD.MM.YYYY"
      invalidDateError="Invalid date"
      calendarButtonLabel="Choose the moving date from a calendar"
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
