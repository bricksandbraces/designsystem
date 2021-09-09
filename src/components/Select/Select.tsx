import React, { ChangeEvent, useEffect, useState } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import FormLabel from "../FormLabel/FormLabel";
import useControlled from "../../hooks/useControlled";

type SelectOptionGroup = { group: string; options: SelectOption[] };

type SelectOption = {
  value: string;
  text: string;
};

type SelectProps = {
  /** Options data for the selectable items */
  options: (SelectOption | SelectOptionGroup)[];

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
   * Error
   */
  error?: boolean;
  errorText?: string;

  /**
   * Warning
   */
  warning?: boolean;
  warningText?: string;
};

const Select = ({
  size,
  label,
  className,
  error,
  errorText,
  warning,
  warningText,
  disabled,
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
      <option
        key={option.value}
        value={option.value}
        selected={option.value === selectedValue}
      >
        {option.text}
      </option>
    );
  };

  return (
    <div className={cx("select", className)}>
      <FormLabel htmlFor="select-toggle-button">{label}</FormLabel>
      <div className={cx("select--input-wrapper")}>
        <select
          className={cx(`select--input select--${size}`, {
            "select--error": error || errorText,
            "select--warning": !(error || errorText) && (warning || warningText)
          })}
          id="select-toggle-button"
          disabled={disabled}
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
          className="select--input-icon"
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
        <div className="select--error-text">
          <IconAlertCircle size={16} />

          {errorText}
        </div>
      )}
      {warningText && !errorText && (
        <div className="select--warning-text">
          <IconAlertTriangle size={16} />

          {warningText}
        </div>
      )}
    </div>
  );
};

export default Select;
