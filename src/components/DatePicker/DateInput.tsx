import React, { useEffect, useState } from "react";
import cx from "classnames";
import { parse, format } from "date-fns";
import "react-day-picker/lib/style.css";
import { getLogger } from "@openbricksandbraces/eloguent";
import TextInput, { TextInputProps } from "../TextInput/TextInput";
import useControlled from "../../hooks/useControlled";
import { filterForKeys } from "../../helpers/keyboardUtilities";

const log = getLogger("date-fns");

export type DateChangeEvent =
  | React.FocusEvent<HTMLInputElement>
  | React.KeyboardEvent<HTMLInputElement>
  | React.MouseEvent<any, MouseEvent>;

export type DateInputProps = {
  /**
   * DateInput Classname
   */
  className?: string;

  /**
   * DateInput ISO Date Format
   * Defaults to: DD-MM-YYYY
   */
  dateFormat?: string;

  /**
   * DateInput Value
   */
  value?: Date;

  /**
   * DateInput Default Value
   */
  defaultValue?: Date;

  /**
   * DateInput OnInputChanged
   * Called whenever the user changes something within the textinput.
   * Also notifies about the change event.
   */
  onInputChanged?: (
    input: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * DateInput OnDateChanged
   * Called whenever the date behind the input changes. This is the case when
   * 1. the user submits the input via pressing Enter.
   * 2. the user leaves the input field causing a BlurEvent.
   * Also notifies about the triggering event (meaning Keyboard or BlurEvent).
   */
  onDateChanged?: (date: Date | null, event: DateChangeEvent) => void;

  /**
   * DateInput Children
   * Render an optional calendar in sync with this date input.
   */
  children?: (
    selectedDate: Date | null,
    changeDate: (
      event: React.MouseEvent<any, MouseEvent>,
      newDate?: Date | null | undefined
    ) => void
  ) => React.ReactNode;
} & Omit<
  TextInputProps,
  "value" | "defaultValue" | "children" | "onChange" | "placeholder"
>;

const DateInput = ({
  children,
  className,
  dateFormat = "DD-MM-YYYY",
  defaultValue,
  value,
  onInputChanged,
  onDateChanged,
  ...props
}: DateInputProps) => {
  const controlled = useControlled(value);

  const [localValue, setLocalValue] = useState<Date | null>(
    (controlled ? value : defaultValue) ?? null
  );
  const [inputValue, setInputValue] = useState<string>(
    localValue ? format(localValue, dateFormat) : ""
  );

  useEffect(() => {
    if (controlled) {
      setLocalValue(value ?? null);
      setInputValue(localValue ? format(localValue, dateFormat) : "");
    }
  }, [value]);

  const handleSubmit = (event: DateChangeEvent) => {
    let newDate: Date | null = null;

    // parse from input
    try {
      newDate = parse(inputValue, dateFormat, new Date());
    } catch (err) {
      log.error(err);
    }

    if (!controlled) {
      setLocalValue(newDate);
    }

    onDateChanged?.(newDate, event);
  };

  return (
    <>
      <TextInput
        className={cx(className, "")}
        placeholder={dateFormat}
        value={inputValue}
        type="text"
        autoComplete="off"
        onChange={(event) => {
          const input = event.target.value;
          if (!controlled) {
            setInputValue(input);
          }
          onInputChanged?.(input, event);
        }}
        onBlur={(event) => handleSubmit(event)}
        onKeyDown={filterForKeys(["Enter"], (event) => handleSubmit(event))}
        {...props}
      />
      {children?.(localValue, (event, newDate) => {
        handleSubmit(event, newDate);
      })}
    </>
  );
};

export default DateInput;
