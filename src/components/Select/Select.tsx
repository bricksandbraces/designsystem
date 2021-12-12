import React from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import { useControlledValue } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

export type SelectOptionGroup = {
  /**
   * SelectOptionGroup Group name
   */
  group: string;

  /**
   * SelectOptionGroup Options
   */
  options: SelectOption[];
};

export type SelectOption = {
  /**
   * SelectOption Value
   */
  value: string;

  /**
   * SelectOption Text
   */
  text: string;
};

export type SelectProps = {
  /**
   * Select Options data for the selectable items
   * */
  options: (SelectOption | SelectOptionGroup)[];

  /**
   * Select Id
   */
  id: string;

  /**
   * Select Controlled selected value
   */
  value?: string;

  /**
   * Select Uncontrolled default selected value
   */
  defaultValue?: string;

  /**
   * Select onChange with new value
   */
  onChange?: (event?: React.ChangeEvent<HTMLSelectElement>) => void;

  /**
   * Select ClassName
   */
  className?: string;

  /**
   * Select size
   */
  size?: "large" | "small" | "default";

  /**
   * Select label
   */
  label?: string;

  /**
   * Select disabled
   */
  disabled?: boolean;

  /**
   * Select Disabled
   */
  readOnly?: boolean;

  /**
   * Select True if error state is present
   */
  error?: boolean;

  /**
   * Select The error text to display
   */
  errorText?: string;

  /**
   * Select True if warning state is present
   */
  warning?: boolean;

  /**
   * Select The warning text to display
   */
  warningText?: string;
};

const Select = (
  {
    size,
    id,
    label,
    className,
    error,
    errorText,
    warning,
    warningText,
    disabled,
    readOnly,
    options,
    value,
    defaultValue,
    onChange
  }: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) => {
  const firstAsGroup = options[0] as SelectOptionGroup;
  const first =
    firstAsGroup.group && firstAsGroup.options?.length > 0
      ? firstAsGroup.options[0]
      : (options[0] as SelectOption);

  const [, performSelect] = useControlledValue(
    value,
    defaultValue,
    onChange &&
      ((newValue, event) => {
        onChange(event as React.ChangeEvent<HTMLSelectElement>);
      }),
    first.value
  );

  const renderOption = (option: SelectOption) => {
    return (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    );
  };

  return (
    <div
      className={cx(
        `${prefix}--select`,
        { [`${prefix}--select-readonly`]: readOnly },
        className
      )}
    >
      <Label htmlFor={id}>{label}</Label>
      <div className={cx(`${prefix}--select-input__wrapper`)}>
        <select
          className={cx(`${prefix}--select-input ${prefix}--select-${size}`, {
            [`${prefix}--select-error`]: error || errorText,
            [`${prefix}--select-warning`]:
              !(error || errorText) && (warning || warningText)
          })}
          id={id}
          disabled={disabled || readOnly}
          value={value}
          ref={ref}
          defaultValue={defaultValue}
          onChange={(event) => {
            performSelect(event.target.value, event);
          }}
        >
          {options.map((option) => {
            if ((option as SelectOptionGroup).group != null) {
              const optionGroup = option as SelectOptionGroup;
              return (
                <optgroup
                  key={`${optionGroup.group}-group`}
                  label={optionGroup.group}
                >
                  {optionGroup.options.map(renderOption)}
                </optgroup>
              );
            }
            return renderOption(option as SelectOption);
          })}
        </select>
        <svg
          className={`${prefix}--select-input__icon`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {errorText && !warningText && (
        <div className={`${prefix}--select-error__text`}>
          <IconAlertCircle size={16} />

          {errorText}
        </div>
      )}
      {warningText && !errorText && (
        <div className={`${prefix}--select-warning__text`}>
          <IconAlertTriangle size={16} />

          {warningText}
        </div>
      )}
    </div>
  );
};

export default React.forwardRef(Select);
