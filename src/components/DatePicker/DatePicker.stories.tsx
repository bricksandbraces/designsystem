import { getLogger } from "@openbricksandbraces/eloguent";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useRef, useState } from "react";
import { formatDate } from "../../helpers/dateUtilities";

import Label from "../Typography/Label";
import DateInput from "./DateInput";
import DatePicker from "./DatePicker";

export default { title: "Components/DatePicker", decorators: [withKnobs] };

const logger = getLogger("DatePickerStory");

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";
const defaultDateFormat = "dd-MM-yyyy";

export const Uncontrolled = () => {
  const dateRef = useRef<Date | null>(new Date());
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <DateInput
        defaultValue="01-01-2020"
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("Size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-01")}
        dateFormat={text("dateFormat", defaultDateFormat)}
        label={text("label", "Birthday")}
        onChange={(event) => {
          logger.log(event.target.value);
        }}
        onDateChanged={(newDate) => {
          logger.log(newDate);
          dateRef.current = newDate;
        }}
      />
      <Label>Current date value: {dateRef.current?.toISOString()}</Label>
    </div>
  );
};

export const Controlled = () => {
  const dateFormat = text("dateFormat", "dd-MM-yyyy");
  const [date, setDate] = useState<Date | null>(new Date());
  const [textValue, setTextValue] = useState<string>(
    formatDate(date, dateFormat, "")
  );

  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <DateInput
        value={textValue}
        onChange={(event) => {
          logger.log("onInputChanged: newInput");
          // eslint-disable-next-line no-console
          console.log(event.target.value);
          setTextValue(event.target.value);
        }}
        onDateChanged={(newDate) => {
          logger.log("onDateChanged: newDate");
          // eslint-disable-next-line no-console
          console.log(newDate);
          if (newDate) {
            setDate(newDate);
          }
        }}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("Size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-02")}
        dateFormat={dateFormat}
        label={text("label", "Birthday")}
      />
      <Label>Current date value: {date?.toISOString()}</Label>
    </div>
  );
};

export const SingleWithCalendar = () => {
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <DateInput label="Single with calendar">
        {(selectedDate, changeDate) => {
          return (
            <DatePicker
              selectedDays={selectedDate ?? undefined}
              onDayClick={(newDate) => {
                changeDate(newDate);
              }}
            />
          );
        }}
      </DateInput>
    </div>
  );
};
