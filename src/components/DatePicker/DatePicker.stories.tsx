import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { format } from "date-fns";
import React, { useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Button } from "../..";
import { formatDate } from "../../helpers/dateUtilities";
import { prefix } from "../../settings";

import { Label } from "../Typography/Typography";
import { DateInput } from "./DateInput";
import { DatePicker } from "./DatePicker";
import { DatePickerSkeleton } from "./DatePickerSkeleton";

export default {
  title: "Input/DatePicker",
  decorators: [withKnobs]
};

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
        light={boolean("light", false)}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        defaultValue={format(defaultDate, dateFormat)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-01")}
        dateFormat={dateFormat}
        label={text("label", "Birthday")}
        onChange={action("onChange")}
        onDateChanged={(newDate) => {
          setSubmittedDate(newDate);
          action("onDateChanged")(newDate);
        }}
        onKeyDown={action("onKeyDown")}
        onBlur={action("onBlur")}
        onFocus={action("onFocus")}
      />
      <br />
      <br />
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
        light={boolean("light", false)}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        value={textValue}
        onChange={(newValue, event) => {
          setTextValue(newValue);
          action("onChange")(newValue, event);
        }}
        onDateChanged={(newDate) => {
          setChosenDate(newDate);
          action("onDateChanged")(newDate);
        }}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-02")}
        dateFormat={dateFormat}
        label={text("label", "Birthday")}
      />
      <br />
      <br />
      <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
    </div>
  );
};

export const SingleWithCalendarUncontrolled = () => {
  const defaultDate = new Date();
  const dateFormat = text("dateFormat", "dd-MM-yyyy");
  // this is only a mirrored value since uncontrolled input holds the value
  const [chosenDate, setChosenDate] = useState<Date | null>(defaultDate);

  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <div
        ref={containerRef}
        className={`${prefix}--datepicker-container ${prefix}--datepicker-default`}
      >
        <DateInput
          light={boolean("light", false)}
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          label="Single with calendar"
          defaultValue={format(defaultDate, dateFormat)}
          dateFormat={dateFormat}
          size={select("size", sizeOptions, defaultSize) as any}
          onDateChanged={(date) => {
            setChosenDate(date);
            action("onDateChanged")(date);
          }}
          onChange={action("onChange")}
          onFocus={(event) => {
            setOpen(true);
            action("onFocus")(event);
          }}
          onBlur={action("onBlur")}
          onKeyDown={action("onKeyDown")}
        >
          {(insertedDate, changeDate) => {
            // inserted date may be invalid and is a live representation from the text
            const selectedDay = insertedDate ?? undefined;
            return (
              <OutsideClickHandler
                onOutsideClick={(event) => {
                  if (
                    !containerRef.current?.contains(event.target as HTMLElement)
                  ) {
                    setOpen(false);
                  }
                  action("onOutsideClick")(event);
                }}
              >
                <DatePicker
                  light={boolean("light", false)}
                  open={open}
                  selectedDays={selectedDay}
                  onDayClick={(newDate) => {
                    changeDate(newDate);
                    setOpen(false);
                    action("onDayClick")(newDate);
                  }}
                  initialMonth={selectedDay}
                />
              </OutsideClickHandler>
            );
          }}
        </DateInput>
      </div>

      <br />
      <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
    </div>
  );
};

export const SingleWithCalendarControlled = () => {
  const dateFormat = text("dateFormat", "dd-MM-yyyy");
  // this is only a mirrored value since uncontrolled input holds the value
  const [chosenDate, setChosenDate] = useState<Date | null>(new Date());

  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <div
        ref={containerRef}
        className={`${prefix}--datepicker-container ${prefix}--datepicker-default`}
      >
        <DateInput
          light={boolean("light", false)}
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          label="Single with calendar"
          value={formatDate(chosenDate, dateFormat, "")}
          dateFormat={dateFormat}
          onChange={action("onChange")}
          size={select("size", sizeOptions, defaultSize) as any}
          onDateChanged={(date) => {
            setChosenDate(date);
            action("onDateChanged")(date);
          }}
          onFocus={() => {
            setOpen(true);
            action("onFocus")(event);
          }}
          onBlur={action("onBlur")}
          onKeyDown={action("onKeyDown")}
        >
          {(insertedDate, changeDate) => {
            // inserted date may be invalid and is a live representation from the text
            const selectedDay = insertedDate ?? undefined;
            return (
              <OutsideClickHandler
                onOutsideClick={(event) => {
                  if (
                    !containerRef.current?.contains(event.target as HTMLElement)
                  ) {
                    setOpen(false);
                  }
                  action("onOutsideClick")(event);
                }}
              >
                <DatePicker
                  open={open}
                  light={boolean("light", false)}
                  selectedDays={selectedDay}
                  onDayClick={(newDate) => {
                    changeDate(newDate);
                    setOpen(false);
                    action("onDayClick")(newDate);
                  }}
                  initialMonth={selectedDay}
                />
              </OutsideClickHandler>
            );
          }}
        </DateInput>
      </div>
      <br />
      <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
      <br />
      <br />
      <Button
        onClick={(event) => {
          setChosenDate(new Date());
          action("onClick")(event);
        }}
      >
        Reset to today
      </Button>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <DatePickerSkeleton
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
