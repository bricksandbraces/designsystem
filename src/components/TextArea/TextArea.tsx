import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import useControlled from "../../hooks/useControlled";

type TextAreaProps = {
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
   * Maximum Length
   */
  maxLength?: number;

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
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;

  /**
   * ReactChildren
   */
  children?: React.ReactNode;
};

const TextArea = (
  {
    id,
    error,
    errorText,
    warningText,
    warning,
    maxLength,
    className,
    label,
    placeholder,
    value,
    defaultValue,
    children,
    onChange
  }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
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
    <div className="textarea">
      {label && (
        <label htmlFor={id} className="textarea--label">
          {label}
        </label>
      )}
      <div className="textarea--input-container">
        <textarea
          maxLength={maxLength}
          id={id}
          ref={ref}
          className={cx(
            "textarea--input",
            {
              "textarea--error":
                (error || errorText) && !(warning || warningText),
              "textarea--warning":
                !(error || errorText) && (warning || warningText)
            },
            className
          )}
          placeholder={placeholder}
          value={textValue}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
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

export default forwardRef<HTMLTextAreaElement, TextAreaProps>(TextArea);
