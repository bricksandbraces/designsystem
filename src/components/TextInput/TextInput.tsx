import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons-react";
import cx from "classnames";
import React, { ReactNode, forwardRef, memo } from "react";
import { mergeRefs } from "react-merge-refs";
import { useControlledInput } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { Label } from "../Typography/Typography";

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
   * TextInput Error State
   */
  error?: boolean;

  /**
   * TextInput Error Text
   */
  errorText?: string;

  /**
   * TextInput Warning State
   */
  warning?: boolean;

  /**
   * TextInput Warning Text
   */
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
    | "hidden"
    | "tel";

  /**
   * TextInput Name
   */
  name?: string;

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
   * TextInput Icon
   */
  icon?: ReactNode;

  /**
   * TextInput Input Mode
   */
  inputMode?:
    | "text"
    | "email"
    | "search"
    | "url"
    | "tel"
    | "none"
    | "numeric"
    | "decimal"
    | undefined;

  /**
   * TextInput Light
   */
  light?: boolean;

  /**
   * TextInput Fluid
   */
  fluid?: boolean;

  /**
   * TextInput OnChange Function
   */
  onChange?: (
    newValue: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * TextInput OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLInputElement>;

  /**
   * TextInput OnBlur Function
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * TextInput OnFocus Function
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * TextInput OnKeyDown Function
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * TextInput Children
   */
  children?: React.ReactNode;
};

// eslint-disable-next-line react/display-name
export const TextInput = memo(
  forwardRef(function TextInput(
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
      light,
      name,
      readOnly,
      autoComplete,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onClick,
      error,
      errorText,
      icon,
      inputMode,
      warning,
      warningText,
      size = "default",
      children
    }: TextInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) {
    const [inputRef, textValue, handleChange] = useControlledInput(
      value,
      defaultValue,
      onChange &&
        ((newValue, event) => {
          onChange(
            newValue ?? "",
            event as React.ChangeEvent<HTMLInputElement>
          );
        })
    );
    return (
      <div
        className={cx(
          `${prefix}--textinput`,
          {
            [`${prefix}--textinput-light`]: light,
            [`${prefix}--textinput-fluid`]: fluid,
            [`${prefix}--textinput-disabled`]: disabled,
            [`${prefix}--textinput-readonly`]: readOnly
          },
          className
        )}
      >
        {label && !fluid && <Label htmlFor={id}>{label}</Label>}
        <div className={`${prefix}--textinput-input__container`}>
          {icon && <div className={`${prefix}--textinput-icon`}>{icon}</div>}
          <input
            id={id}
            disabled={disabled}
            readOnly={readOnly}
            ref={mergeRefs([ref, inputRef])}
            className={cx(`${prefix}--textinput-input`, {
              [`${prefix}--textinput-${size}`]: !fluid,
              [`${prefix}--textinput-error`]:
                (error || errorText) && !(warning || warningText),
              [`${prefix}--textinput-warning`]:
                !(error || errorText) && (warning || warningText)
            })}
            type={type}
            name={name}
            placeholder={!fluid ? placeholder : ""}
            inputMode={inputMode}
            autoComplete={autoComplete}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange()}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onClick={onClick}
          />
          {fluid && (
            <label
              className={cx(`${prefix}--textinput-fluid__label`, {
                [`${prefix}--textinput-fluid__label-value`]: !!textValue
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
  })
);
