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
   * TextInput Label
   */
  label?: string;

  /**
   * TextInput Placeholder
   */
  placeholder?: string;

  /**
   * TextInput Id
   */
  id?: string;

  /**
   * TextInput Disabled
   */
  disabled?: boolean;

  /**
   * TextInput ReadOnly
   */
  readOnly?: boolean;

  /**
   * TextInput Error State & Text
   */
  error?: boolean;
  errorText?: string;

  /**
   * TextInput Warning State & Text
   */
  warning?: boolean;
  warningText?: string;

  /**
   * TextInput Type
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
   * TextInput Size
   */
  size?: "default" | "small" | "large";

  /**
   * TextInput AutoComplete
   */
  autoComplete?: "off" | "on";

  /**
   * TextInput Default Value
   */
  defaultValue?: string;

  /**
   * TextInput Value
   */
  value?: string;

  /**
   * TextInput Fluid
   */
  fluid?: boolean;

  /**
   * TextInput OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * TextInput Children
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
    disabled,
    readOnly,
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
        [`${prefix}--textinput-fluid`]: fluid
      })}
    >
      {label && !fluid && <Label htmlFor={id}>{label}</Label>}
      <div className={`${prefix}--textinput-input__container`}>
        <input
          id={id}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          className={cx(
            `${prefix}--textinput-input`,
            {
              [`${prefix}--textinput-large`]: size === "large" && !fluid,
              [`${prefix}--textinput-default`]: size === "default" && !fluid,
              [`${prefix}--textinput-small`]: size === "small" && !fluid,
              [`${prefix}--textinput-error`]:
                (error || errorText) && !(warning || warningText),
              [`${prefix}--textinput-warning`]:
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
            className={cx(`${prefix}--textinput-fluid__label`, {
              [`${prefix}--textinput--fluid__label-value`]: textValue !== ""
            })}
          >
            {placeholder}
          </label>
        )}
        {children}
      </div>
      {errorText && !warningText && (
        <div className={`${prefix}--textinput-error__text`}>
          <IconAlertCircle size={16} />

          {errorText}
        </div>
      )}
      {warningText && !errorText && (
        <div className={`${prefix}--textinput-warning__text`}>
          <IconAlertTriangle size={16} />

          {warningText}
        </div>
      )}
    </div>
  );
};

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);
