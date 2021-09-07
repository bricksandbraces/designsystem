import React, { ReactNode } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import FormLabel from "../FormLabel/FormLabel";

type SelectProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * React className
   */
  children?: ReactNode;

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

  /**
   * Select title
   */
  title: string;
};

const Select = ({
  children,
  size,
  label,
  className,
  title,
  error,
  errorText,
  warning,
  warningText,
  disabled
}: SelectProps) => {
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
        >
          <option value="">{title}</option>
          {children}
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
