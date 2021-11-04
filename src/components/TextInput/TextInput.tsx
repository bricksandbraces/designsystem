import React, { forwardRef } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import mergeRefs from "react-merge-refs";
import FormLabel from "../FormLabel/FormLabel";
import { prefix } from "../../settings";
import useControlledValue from "../../hooks/useControlledValue";

export type TextInputProps = {
  /**
   * TextInput ClassName
   */
  className?: string;

  /**
   * Label
   */
  label?: string;

  /**
   * TextInput Placeholder e.g. for indicating DatePickerInput formats like DD-MM-YYYY
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
   * Value
   */
  fluid?: boolean;

  /**
   * OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

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
    onBlur,
    onFocus,
    onKeyDown,
    error,
    errorText,
    warning,
    warningText,
    size = "default",
    children
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [inputRef, textValue, handleChange] = useControlledValue(
    value,
    defaultValue,
    onChange
  );
  return (
    <div
      className={cx(`${prefix}--textinput`, {
        [`${prefix}--textinput--fluid`]: fluid
      })}
    >
      {label && !fluid && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <div className={`${prefix}--textinput--input-container`}>
        <input
          id={id}
          ref={mergeRefs([ref, inputRef])}
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
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange()}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
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

export default React.memo(
  forwardRef<HTMLInputElement, TextInputProps>(TextInput)
);
