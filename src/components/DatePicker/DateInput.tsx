import React, { useEffect, useState } from "react";
import { getLogger } from "@openbricksandbraces/eloguent";
import TextInput, { TextInputProps } from "../TextInput/TextInput";
import useControlled from "../../hooks/useControlled";
import { filterForKeys } from "../../helpers/keyboardUtilities";
import { formatDate, parseDate } from "../../helpers/dateUtilities";

const logger = getLogger("date-fns");

export type DateChangeEvent =
  | React.FocusEvent<HTMLInputElement>
  | React.KeyboardEvent<HTMLInputElement>;

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
  value?: string;

  /**
   * DateInput Default Value
   */
  defaultValue?: string;

  /**
   * DateInput OnInputChanged
   * Called whenever the user changes something within the textinput.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * DateInput OnDateChanged
   * Called whenever the date behind the input changes. This is the case when
   * 1. the user submits the input via pressing Enter.
   * 2. the user leaves the input field causing a BlurEvent.
   * 3. the children propagate a DateChanged event (e.g. due to DatePicker selection)
   */
  onDateChanged?: (date: Date | null) => void;

  /**
   * DateInput Children
   * Render an optional calendar in sync with this date input.
   */
  children?: (
    selectedDate: Date | null,
    changeDate: (newDate: Date | null) => void
  ) => React.ReactNode;
} & Omit<
  TextInputProps,
  "value" | "defaultValue" | "children" | "onChange" | "placeholder"
>;

const DateInput = ({
  children,
  className,
  dateFormat = "dd-MM-yyyy",
  defaultValue,
  value,
  label,
  onChange,
  onDateChanged,
  ...props
}: DateInputProps) => {
  const controlled = useControlled(value);
  // one text based representation which may also contain invalid values
  const [textValue, setTextValue] = useState<string>(
    (controlled ? value : defaultValue) ?? ""
  );

  useEffect(() => {
    if (controlled) {
      setTextValue(value ?? "");
    }
  }, [value]);

  const handleSubmit = (event: DateChangeEvent) => {
    logger.debug("handleSubmit: ");
    // eslint-disable-next-line no-console
    console.debug(event);

    // parse from input
    const newDate = parseDate(textValue, dateFormat, null);

    // Reparse to textValue
    if (!controlled) {
      setTextValue(formatDate(newDate, dateFormat, textValue));
    }

    logger.debug("newDate: ");
    // eslint-disable-next-line no-console
    console.debug(newDate);

    onDateChanged?.(newDate);
  };

  return (
    <>
      <TextInput
        placeholder={dateFormat}
        value={textValue}
        type="text"
        autoComplete="off"
        onChange={(event) => {
          const input = event.target.value;
          if (!controlled) {
            setTextValue(input);
          }
          onChange?.(event);
        }}
        onBlur={(event) => handleSubmit(event)}
        onKeyDown={filterForKeys(["Enter"], (event) => handleSubmit(event))}
        label={`${label} (${dateFormat.toLocaleLowerCase()})`}
        {...props}
      />
      {children?.(parseDate(textValue, dateFormat, null), (newDate) => {
        const newTextValue = formatDate(newDate, dateFormat, "");
        setTextValue(newTextValue);
        onDateChanged?.(newDate);
      })}
    </>
  );
};

export default DateInput;
