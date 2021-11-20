import React, { ChangeEvent, useEffect, useState } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import { useControlled } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

export type SelectOptionGroup = { group: string; options: SelectOption[] };

export type SelectOption = {
  value: string;
  text: string;
};

export type SelectProps = {
  /**
   * Options data for the selectable items
   * */
  options: (SelectOption | SelectOptionGroup)[];

  /**
   * Mandatory id
   */
  id: string;

  /**
   * Controlled selected value
   */
  value?: string;

  /**
   * Uncontrolled default selected value
   */
  defaultValue?: string;

  /**
   * onChange with new value
   */
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;

  /**
   * React className
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
   * Disabled select
   */
  disabled?: boolean;

  /**
   * Disabled select
   */
  readOnly?: boolean;

  /**
   * True if error state is present
   */
  error?: boolean;

  /**
   * The error text to display
   */
  errorText?: string;

  /**
   * True if warning state is present
   */
  warning?: boolean;

  /**
   * The warning text to display
   */
  warningText?: string;
};

const Select = ({
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
}: SelectProps) => {
  const controlled = useControlled(value);
  const [selectedValue, setSelectedValue] = useState<string>(
    (controlled ? value : defaultValue) ?? (options[0] as SelectOption).value
  );
  useEffect(() => {
    if (controlled) {
      setSelectedValue(value ?? "");
    }
  }, [value]);

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
          value={selectedValue}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            if (!controlled) {
              setSelectedValue(event.target.value);
            }
            onChange?.(event);
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

export default Select;
