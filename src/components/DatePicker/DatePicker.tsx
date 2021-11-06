import React from "react";
import DayPicker, { DayPickerProps } from "react-day-picker";
import cx from "classnames";
import "react-day-picker/lib/style.css";
import { prefix } from "../../settings";

export type DatePickerProps = { open?: boolean } & DayPickerProps;

const DatePicker = ({ className, open, ...rest }: DatePickerProps) => {
  return (
    <DayPicker
      className={cx(className, `${prefix}--date-picker`, {
        [`${prefix}--date-picker__hidden`]: !open
      })}
      {...rest}
    />
  );
};

export default DatePicker;
