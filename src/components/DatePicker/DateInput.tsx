import React, { forwardRef } from "react";
import mergeRefs from "react-merge-refs";
import TextInput, { TextInputProps } from "../TextInput/TextInput";
import { filterForKeys } from "../../helpers/keyboardUtilities";
import { formatDate, parseDate } from "../../helpers/dateUtilities";
import { useControlled, useControlledInput } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import cx from "classnames";
import { IconCalendar } from "@tabler/icons";

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
   * DateInput Light
   */
  light?: boolean;

  /**
   * DateInput Size
   */
  size?: "large" | "small" | "default";

  /**
   * DateInput Default Value
   */
  defaultValue?: string;

  /**
   * DateInput OnInputChanged
   * Called whenever the user changes something within the textinput.
   */
  onChange?: (
    dateString: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * DateInput OnBlur
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * DateInput OnFocus
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * DateInput
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * DateInput OnDateChanged
   * Called whenever the date behind the input changes. This is the case when
   * 1. the user submits the input via pressing Enter.
   * 2. the user leaves the input field causing a BlurEvent.
   * 3. the children propagate a DateChanged event (e.g. due to DatePicker selection)
   */
  onDateChanged?: (date: Date | null, formattedDate: string) => void;

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

const DateInput = (
  {
    children,
    className,
    dateFormat = "dd-MM-yyyy",
    defaultValue,
    value,
    light,
    label,
    size,
    onChange,
    onDateChanged,
    onKeyDown,
    onFocus,
    onBlur,
    ...props
  }: DateInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const controlled = useControlled(value);
  const [inputRef, textValue, handleChange, setValueManually] =
    useControlledInput(
      value,
      defaultValue,
      onChange &&
        ((newValue, event) => {
          onChange(newValue ?? "", event);
        })
    );

  /**
   * When the text input is being submitted via keypress enter or onBlur the dateChange is executed.
   * This also updates the textvalue for uncontrolled usage
   */
  const handleSubmit = () => {
    // Parse Date from input
    const newDate = parseDate(textValue, dateFormat, null);
    // Reparse to formatted text date
    const formattedDate = formatDate(newDate, dateFormat, textValue ?? "");

    if (!controlled) {
      // for uncontrolled usage the reparsed value has to be updated
      // so that e.g. 1-1-2020 is being formatted to 01-01-2020.
      setValueManually(formattedDate);
    }

    onDateChanged?.(newDate, formattedDate);
  };

  return (
    <>
      <TextInput
        icon={<IconCalendar />}
        placeholder={dateFormat}
        className={cx(`${prefix}--datepicker-input`)}
        value={value}
        light={light}
        defaultValue={defaultValue}
        ref={mergeRefs([ref, inputRef])}
        type="text"
        size={size}
        autoComplete="off"
        onChange={handleChange()}
        onFocus={onFocus}
        onBlur={(event) => {
          onBlur?.(event);
          handleSubmit();
        }}
        onKeyDown={(event) => {
          filterForKeys(["Enter"], () => handleSubmit())(event);
          onKeyDown?.(event);
        }}
        label={`${label} (${dateFormat.toLocaleLowerCase()})`}
        {...props}
      />
      {children?.(parseDate(textValue, dateFormat, null), (newDate) => {
        // the selected date has to be updated also within the textfield
        const newTextValue = formatDate(newDate, dateFormat, "");
        if (!controlled) {
          setValueManually(newTextValue);
        }
        onDateChanged?.(newDate, newTextValue);
      })}
    </>
  );
};

export default React.memo(
  forwardRef<HTMLInputElement, DateInputProps>(DateInput)
);
