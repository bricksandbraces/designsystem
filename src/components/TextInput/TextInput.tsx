import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import useControlled from "../../hooks/useControlled";

type TextInputProps = {
  /**
   * TextInput ClassName
   */
  className?: string;

  /**
   * Label
   */
  label?: string;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Id
   */
  id?: string;

  /**
   * Error state & text
   */
  error?: boolean;
  errorText?: string;

  /**
   * Error state & text
   */
  warning?: boolean;
  warningText?: string;

  /**
   * Input Type
   */
  type?: "password" | "text" | "email" | "number" | "search" | "time" | "url";

  /**
   * Container size
   */
  size?: "default" | "small" | "large";

  /**
   * Autocomplete
   */
  autoComplete?: "off" | "on";

  /**
   * Default Value
   */
  defaultValue?: string;

  /**
   * Value
   */
  value?: string;

  /**
   * OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * ReactChildren
   */
  children?: React.ReactNode;
};

const TextInput = (
  {
    id,
    className,
    label,
    placeholder,
    type = "text",
    value,
    defaultValue,
    autoComplete,
    onChange,
    error,
    errorText,
    warning,
    warningText,
    size = "default",
    children
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const controlled = useControlled(value);
  const [textValue, setTextValue] = useState<string>(
    (controlled ? value : defaultValue) ?? ""
  );

  useEffect(() => {
    if (controlled) {
      setTextValue(value ?? "");
    }
  }, [value]);

  return (
    <div className="textinput">
      {label && (
        <label htmlFor={id} className="textinput--label">
          {label}
        </label>
      )}
      <div className="textinput--input-container">
        <input
          id={id}
          ref={ref}
          className={cx(
            "textinput--input",
            {
              "textinput--large": size === "large",
              "textinput--default": size === "default" || undefined,
              "textinput--small": size === "small",
              "textinput--error":
                (error || errorText) && !(warning || warningText),
              "textinput--warning":
                !(error || errorText) && (warning || warningText)
            },
            className
          )}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={textValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (!controlled) {
              setTextValue(event.target.value);
            }
            onChange?.(event);
          }}
        />
        {children}
      </div>
      {errorText && !warningText && (
        <div className="textinput--error-text">
          <IconAlertCircle size={16} />

          {errorText}
        </div>
      )}
      {warningText && !errorText && (
        <div className="textinput--warning-text">
          <IconAlertTriangle size={16} />

          {warningText}
        </div>
      )}
    </div>
  );
};

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);
