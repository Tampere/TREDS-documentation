'use client';

import { DateField } from '@tampere/treds';

const today = new Date();
const inSixMonths = new Date(today.getFullYear(), today.getMonth() + 6, today.getDate());

export default function Range() {
  return (
    <DateField
      label="Booking date"
      helperText="You can book up to six months ahead."
      placeholder="DD.MM.YYYY"
      min={today}
      max={inSixMonths}
      invalidDateError="Invalid date"
      outOfRangeError="Choose a date between today and six months from now"
      calendarButtonLabel="Choose the booking date from a calendar"
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
