import React from "react";
import DayPicker, { DayPickerProps } from "react-day-picker";
import cx from "classnames";
import { prefix } from "../../settings";

export type DatePickerProps = {
  open?: boolean;
  light?: boolean;
} & DayPickerProps;

const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];
const weekdaysLong = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag"
];
const weekdaysShort = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

export const DatePicker = React.forwardRef(function DatePicker(
  { className, open, light, ...rest }: DatePickerProps,
  ref: React.ForwardedRef<DayPicker>
) {
  return (
    <DayPicker
      showOutsideDays
      firstDayOfWeek={1}
      locale="de"
      months={months}
      weekdaysLong={weekdaysLong}
      weekdaysShort={weekdaysShort}
      fixedWeeks
      className={cx(className, `${prefix}--datepicker`, {
        [`${prefix}--datepicker-light`]: light,
        [`${prefix}--datepicker-hidden`]: !open
      })}
      {...rest}
      ref={ref}
    />
  );
});
