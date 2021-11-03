import { getLogger } from "@openbricksandbraces/eloguent";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import { format } from "date-fns";
import React, { useState } from "react";
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
  const defaultDate = new Date();
  // this is only a monitoring value since uncontrolled input holds the value
  const [chosenDate, setSubmittedDate] = useState<Date | null>(defaultDate);
  const dateFormat = text("dateFormat", defaultDateFormat);
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <DateInput
        defaultValue={format(defaultDate, dateFormat)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("Size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-01")}
        dateFormat={dateFormat}
        label={text("label", "Birthday")}
        onChange={(event) => {
          logger.log(event.target.value);
        }}
        onDateChanged={(newDate) => {
          logger.log(newDate);
          setSubmittedDate(newDate);
        }}
      />
      <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
    </div>
  );
};

export const Controlled = () => {
  const dateFormat = text("dateFormat", "dd-MM-yyyy");
  // this is the single source of truth
  const [chosenDate, setChosenDate] = useState<Date | null>(new Date());
  // keep track of the text value and print it out only for debugging purposes
  const [textValue, setTextValue] = useState<string>(
    formatDate(chosenDate, dateFormat, "")
  );

  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <DateInput
        value={textValue}
        onChange={(event) => {
          logger.log("onChange:");
          // eslint-disable-next-line no-console
          console.log(event.target.value);
          setTextValue(event.target.value);
        }}
        onDateChanged={(newDate) => {
          logger.log("onDateChanged:");
          // eslint-disable-next-line no-console
          console.log(newDate);
          setChosenDate(newDate);
        }}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("Size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-02")}
        dateFormat={dateFormat}
        label={text("label", "Birthday")}
      />
      <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
    </div>
  );
};

export const SingleWithCalendarUncontrolled = () => {
  const defaultDate = new Date();
  const dateFormat = text("dateFormat", "dd-MM-yyyy");
  // this is only a mirrored value since uncontrolled input holds the value
  const [chosenDate, setChosenDate] = useState<Date | null>(defaultDate);
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <DateInput
        label="Single with calendar"
        defaultValue={format(defaultDate, dateFormat)}
        dateFormat={dateFormat}
        onDateChanged={(date) => {
          setChosenDate(date);
        }}
      >
        {(insertedDate, changeDate) => {
          // inserted date may be invalid and is a live representation from the text
          const selectedDay = insertedDate ?? undefined;
          return (
            <DatePicker
              selectedDays={selectedDay}
              onDayClick={(newDate) => {
                changeDate(newDate);
              }}
              initialMonth={selectedDay}
            />
          );
        }}
      </DateInput>
      <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
    </div>
  );
};
