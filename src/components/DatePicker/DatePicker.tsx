import cx from "classnames";
import { de } from "date-fns/locale";
import React from "react";
import { DayPicker } from "react-day-picker";
import type { DayPickerProps } from "react-day-picker";
import { prefix } from "../../settings";

export type DatePickerProps = {
  open?: boolean;
  light?: boolean;
} & DayPickerProps;

export const DatePicker = function DatePicker({
  className,
  open,
  light,
  ...rest
}: DatePickerProps) {
  return (
    <DayPicker
      showOutsideDays
      weekStartsOn={1}
      locale={de}
      fixedWeeks
      className={cx(className, `${prefix}--datepicker`, {
        [`${prefix}--datepicker-light`]: light,
        [`${prefix}--datepicker-hidden`]: !open
      })}
      {...rest}
    />
  );
};
