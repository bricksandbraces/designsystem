import React from "react";
import DayPicker, { DayPickerProps } from "react-day-picker";
import cx from "classnames";
import "react-day-picker/lib/style.css";

export type DatePickerProps = {} & DayPickerProps;

const DatePicker = ({ className, ...rest }: DatePickerProps) => {
  return <DayPicker className={cx(className)} {...rest} />;
};

export default DatePicker;
