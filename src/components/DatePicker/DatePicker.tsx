import React from "react";
import DayPicker, { DayPickerProps } from "react-day-picker";
import cx from "classnames";
import "react-day-picker/lib/style.css";
import { prefix } from "../../settings";

export type DatePickerProps = { open?: boolean } & DayPickerProps;

const DatePicker = (
  { className, open, ...rest }: DatePickerProps,
  ref: React.ForwardedRef<DayPicker>
) => {
  return (
    <DayPicker
      showOutsideDays
      firstDayOfWeek={1}
      fixedWeeks
      className={cx(className, `${prefix}--datepicker`, {
        [`${prefix}--datepicker-hidden`]: !open
      })}
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(DatePicker);
