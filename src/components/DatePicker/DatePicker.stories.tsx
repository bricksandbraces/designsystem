import { action } from "@storybook/addon-actions";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import { format } from "date-fns";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Button } from "../..";
import { formatDate } from "../../helpers/dateUtilities";
import { prefix } from "../../settings";

import Label from "../Typography/Label";
import DateInput from "./DateInput";
import DatePicker from "./DatePicker";

export default {
  title: "Components/A_REFA_DatePicker",
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
          setTextValue(event.target.value);
          action("onChange")(event);
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
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
      <OutsideClickHandler
        onOutsideClick={(event) => {
          setOpen(false);
          action("onOutsideClick")(event);
        }}
      >
        <div
          className={`${prefix}--datepicker-container ${prefix}--datepicker-default`}
        >
          <DateInput
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
                <DatePicker
                  open={open}
                  selectedDays={selectedDay}
                  onDayClick={(newDate) => {
                    changeDate(newDate);
                    setOpen(false);
                    action("onDayClick")(newDate);
                  }}
                  initialMonth={selectedDay}
                />
              );
            }}
          </DateInput>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export const SingleWithCalendarControlled = () => {
  const dateFormat = text("dateFormat", "dd-MM-yyyy");
  // this is only a mirrored value since uncontrolled input holds the value
  const [chosenDate, setChosenDate] = useState<Date | null>(new Date());

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpen(false);
          action("onOutsideClick")(event);
        }}
      >
        <div
          className={`${prefix}--datepicker-container ${prefix}--datepicker-default`}
        >
          <DateInput
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
                <DatePicker
                  open={open}
                  selectedDays={selectedDay}
                  onDayClick={(newDate) => {
                    changeDate(newDate);
                    setOpen(false);
                    action("onDayClick")(newDate);
                  }}
                  initialMonth={selectedDay}
                />
              );
            }}
          </DateInput>
        </div>
      </OutsideClickHandler>
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
