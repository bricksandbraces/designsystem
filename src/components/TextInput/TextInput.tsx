import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import useControlled from "../../hooks/useControlled";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

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
  type?:
    | "password"
    | "text"
    | "email"
    | "number"
    | "search"
    | "time"
    | "url"
    | "hidden";

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
   * Value
   */
  fluid?: boolean;

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
    fluid,
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
    <div
      className={cx(`${prefix}--textinput`, {
        [`${prefix}--textinput--fluid`]: fluid
      })}
    >
      {label && !fluid && <Label htmlFor={id}>{label}</Label>}
      <div className={`${prefix}--textinput--input-container`}>
        <input
          id={id}
          ref={ref}
          className={cx(
            `${prefix}--textinput--input`,
            {
              [`${prefix}--textinput--large`]: size === "large" && !fluid,
              [`${prefix}--textinput--default`]:
                (size === "default" && !fluid) || undefined,
              [`${prefix}--textinput--small`]: size === "small" && !fluid,
              [`${prefix}--textinput--error`]:
                (error || errorText) && !(warning || warningText),
              [`${prefix}--textinput--warning`]:
                !(error || errorText) && (warning || warningText)
            },
            className
          )}
          type={type}
          placeholder={!fluid ? placeholder : ""}
          autoComplete={autoComplete}
          value={textValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (!controlled) {
              setTextValue(event.target.value);
            }
            onChange?.(event);
          }}
        />
        {fluid && (
          <label
            className={cx(`${prefix}--textinput--fluid-label`, {
              [`${prefix}--textinput--fluid-label__value`]: textValue !== ""
            })}
          >
            {placeholder}
          </label>
        )}
        {children}
      </div>
      {errorText && !warningText && (
        <div className={`${prefix}--textinput--error-text`}>
          <IconAlertCircle size={16} />

          {errorText}
        </div>
      )}
      {warningText && !errorText && (
        <div className={`${prefix}--textinput--warning-text`}>
          <IconAlertTriangle size={16} />

          {warningText}
        </div>
      )}
    </div>
  );
};

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);
