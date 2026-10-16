'use client';

import { DateField, Fieldset, TimeField } from '@tampere/treds';

export default function DateAndTime() {
  return (
    <Fieldset legend="Appointment" showRequiredMarker>
      <DateField
        label="Date"
        required
        placeholder="DD.MM.YYYY"
        calendarButtonLabel="Choose the date from a calendar"
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
      <TimeField
        label="Time"
        name="time"
        required
        min="08:00"
        max="16:00"
        stepMinutes={30}
        pickerButtonLabel="Choose the time"
        clearButtonLabel="Clear time"
      />
    </Fieldset>
  );
}
