'use client';

import { DateField } from '@tampere/treds';

export default function WithError() {
  return (
    <DateField
      label="Moving date"
      error="Enter the moving date. It can be at most one month away."
      required
      placeholder="DD.MM.YYYY"
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
