'use client';

import { DateField } from '@tampere/treds';

export default function Required() {
  return (
    <DateField
      label="Date of birth"
      required
      placeholder="DD.MM.YYYY"
      calendarButtonLabel="Choose the date of birth from a calendar"
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
