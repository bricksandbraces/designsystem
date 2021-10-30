import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import DateInput from "./DateInput";
import DatePicker from "./DatePicker";

export default { title: "Components/DatePicker", decorators: [withKnobs] };

export const Default = () => {
  return <DateInput defaultValue={new Date()} />;
};

export const SingleWithCalendar = () => {
  return (
    <DateInput label="Single with calendar">
      {(selectedDate, changeDate) => {
        return (
          <DatePicker
            selectedDays={selectedDate ?? undefined}
            onDayClick={(newDate, modifiers, event) => {
              changeDate(event, newDate);
            }}
          />
        );
      }}
    </DateInput>
  );
};
