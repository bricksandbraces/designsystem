import React, { forwardRef } from "react";
import mergeRefs from "react-merge-refs";
import TextInput, { TextInputProps } from "../TextInput/TextInput";
import { filterForKeys } from "../../helpers/keyboardUtilities";
import { formatDate, parseDate } from "../../helpers/dateUtilities";
import useControlledValue from "../../hooks/useControlledValue";
import useControlled from "../../hooks/useControlled";

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
    label,
    onChange,
    onDateChanged,
    ...props
  }: DateInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const controlled = useControlled(value);
  const [inputRef, textValue, handleChange, setCachedUncontrolledValue] =
    useControlledValue(value, defaultValue, onChange);

  const updateValue = (newValue: string) => {
    if (inputRef.current) {
      // for uncontrolled usage, the value has to be updated on dom side
      if (!controlled) {
        inputRef.current.value = newValue;
        // and the cache value has to be also updated
        setCachedUncontrolledValue(newValue);
      }
      inputRef.current.dispatchEvent(new Event("change"));
    }
  };

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
      updateValue(formattedDate);
    }

    onDateChanged?.(newDate, formattedDate);
  };

  return (
    <>
      <TextInput
        placeholder={dateFormat}
        value={value}
        defaultValue={defaultValue}
        ref={mergeRefs([ref, inputRef])}
        type="text"
        autoComplete="off"
        onChange={handleChange()}
        onBlur={() => handleSubmit()}
        onKeyDown={filterForKeys(["Enter"], () => handleSubmit())}
        label={`${label} (${dateFormat.toLocaleLowerCase()})`}
        {...props}
      />
      {children?.(parseDate(textValue, dateFormat, null), (newDate) => {
        // the selected date has to be updated also within the textfield
        const newTextValue = formatDate(newDate, dateFormat, "");
        updateValue(newTextValue);
        onDateChanged?.(newDate, newTextValue);
      })}
    </>
  );
};

export default React.memo(
  forwardRef<HTMLInputElement, DateInputProps>(DateInput)
);
