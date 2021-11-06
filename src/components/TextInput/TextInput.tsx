import React, { forwardRef } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import mergeRefs from "react-merge-refs";
import { prefix } from "../../settings";
import Label from "../Typography/Label";
import useControlledValue from "../../hooks/useControlledValue";

export type TextInputProps = {
  /**
   * TextInput ClassName
   */
  className?: string;

  /**
   * TextInput Label
   */
  label?: string;

  /**
   * TextInput Placeholder e.g. for indicating DatePickerInput formats like DD-MM-YYYY
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

  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

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
      className={cx(
        `${prefix}--textinput`,
        {
          [`${prefix}--textinput-fluid`]: fluid
        },
        className
      )}
    >
      {label && !fluid && <Label htmlFor={id}>{label}</Label>}
      <div className={`${prefix}--textinput-input__container`}>
        <input
          id={id}
          disabled={disabled}
          readOnly={readOnly}
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
            className={cx(`${prefix}--textinput-fluid__label`, {
              [`${prefix}--textinput-fluid__label-value`]: textValue !== ""
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

export default React.memo(
  forwardRef<HTMLInputElement, TextInputProps>(TextInput)
);
