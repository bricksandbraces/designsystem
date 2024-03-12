import { action } from "@storybook/addon-actions";
import { format } from "date-fns";
import React, { useRef, useState } from "react";
import { Button, OutsideClickListener } from "../..";
import { formatDate } from "../../helpers/dateUtilities";
import { prefix } from "../../settings";

import { Label } from "../Typography/Typography";
import { DateInput } from "./DateInput";
import { DatePicker } from "./DatePicker";
import { DatePickerSkeleton } from "./DatePickerSkeleton";

export default {
  component: DateInput,
  title: "Input/DatePicker",
  decorators: [
    (Story: any) => (
      <div style={{ height: "100vh", padding: "32px", color: "white" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"]
      }
    }
  },
  args: {
    dateFormat: "dd-MM-yyyy",
    light: false,
    disabled: false,
    readOnly: false,
    defaultDate: new Date(),
    warningText: "",
    errorText: "",
    size: "default",
    id: "textfield-01",
    label: "Birthday"
  }
};

export const Uncontrolled = {
  render: (args: any) => {
    const { defaultDate } = args;
    const defaultValue = format(defaultDate, args.dateFormat);
    // this is only a monitoring value since uncontrolled input holds the value
    const [chosenDate, setSubmittedDate] = useState<Date | null>(defaultDate);
    const { dateFormat } = args;
    return (
      <>
        <DateInput
          {...args}
          defaultValue={defaultValue}
          dateFormat={dateFormat}
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
      </>
    );
  }
};

export const Controlled = {
  render: (args: any) => {
    // this is the single source of truth
    const [chosenDate, setChosenDate] = useState<Date | null>(new Date());
    // keep track of the text value and print it out only for debugging purposes
    const [textValue, setTextValue] = useState<string>(
      formatDate(chosenDate, args.dateFormat, "")
    );

    return (
      <>
        <DateInput
          {...args}
          value={textValue}
          onChange={(newValue, event) => {
            setTextValue(newValue);
            action("onChange")(newValue, event);
          }}
          onDateChanged={(newDate) => {
            setChosenDate(newDate);
            action("onDateChanged")(newDate);
          }}
        />
        <br />
        <br />
        <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
      </>
    );
  }
};

export const SingleWithCalendarUncontrolled = {
  render: (args: any) => {
    const defaultDate = new Date();
    const { dateFormat } = args;
    // this is only a mirrored value since uncontrolled input holds the value
    const [chosenDate, setChosenDate] = useState<Date | null>(defaultDate);

    const [open, setOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    return (
      <>
        <div
          ref={containerRef}
          className={`${prefix}--datepicker-container ${prefix}--datepicker-default`}
        >
          <DateInput
            {...args}
            label="Single with calendar"
            defaultValue={format(defaultDate, dateFormat)}
            dateFormat={dateFormat}
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
                <OutsideClickListener
                  onClickOutside={(event) => {
                    if (
                      !containerRef.current?.contains(
                        event.target as HTMLElement
                      )
                    ) {
                      setOpen(false);
                    }
                    action("onOutsideClick")(event);
                  }}
                >
                  <DatePicker
                    light={false}
                    open={open}
                    selected={selectedDay}
                    onDayClick={(newDate) => {
                      changeDate(newDate);
                      setOpen(false);
                      action("onDayClick")(newDate);
                    }}
                    defaultMonth={selectedDay}
                  />
                </OutsideClickListener>
              );
            }}
          </DateInput>
        </div>

        <br />
        <Label>Chosen date value: {chosenDate?.toISOString()}</Label>
      </>
    );
  }
};

export const SingleWithCalendarControlled = {
  render: (args: any) => {
    const { dateFormat } = args;
    // this is only a mirrored value since uncontrolled input holds the value
    const [chosenDate, setChosenDate] = useState<Date | null>(new Date());

    const [open, setOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <>
        <div
          ref={containerRef}
          className={`${prefix}--datepicker-container ${prefix}--datepicker-default`}
        >
          <DateInput
            {...args}
            label="Single with calendar"
            value={formatDate(chosenDate, dateFormat, "")}
            dateFormat={dateFormat}
            onChange={action("onChange")}
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
                <OutsideClickListener
                  onClickOutside={(event) => {
                    if (
                      !containerRef.current?.contains(
                        event.target as HTMLElement
                      )
                    ) {
                      setOpen(false);
                    }
                    action("onOutsideClick")(event);
                  }}
                >
                  <DatePicker
                    open={open}
                    light={false}
                    selected={selectedDay}
                    onDayClick={(newDate) => {
                      changeDate(newDate);
                      setOpen(false);
                      action("onDayClick")(newDate);
                    }}
                    defaultMonth={selectedDay}
                  />
                </OutsideClickListener>
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
      </>
    );
  }
};

export const Skeleton = {
  render: (args: any) => {
    return <DatePickerSkeleton size={args.size} />;
  }
};
