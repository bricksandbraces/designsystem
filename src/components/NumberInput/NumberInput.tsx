import React, { ChangeEvent, forwardRef } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import mergeRefs from "react-merge-refs";
import FormLabel from "../FormLabel/FormLabel";
import { prefix } from "../../settings";
import useControlledValue from "../../hooks/useControlledValue";
import useControlled from "../../hooks/useControlled";

export type NumberInputProps = {
  /**
   * NumberInput ClassName
   */
  className?: string;

  /**
   * Label
   */
  label?: string;

  /**
   * NumberInput Placeholder
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
  defaultValue?: number;

  /**
   * Value
   */
  value?: number;

  /**
   * Value
   */
  fluid?: boolean;

  /**
   * OnChange Function
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement> | undefined,
    newValue: number
  ) => void;

  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * ReactChildren
   */
  children?: React.ReactNode;

  /**
   * NumberInput The step to increment or decrement the current value with.
   */
  step?: number;

  /**
   * NumberInput The minimum value that can be inserted
   */
  min?: number;

  /**
   * NumberInput The maximum value that can be inserted
   */
  max?: number;

  float?: boolean;
};

const NumberInput = (
  {
    id,
    className,
    label,
    placeholder,
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
    children,
    step = 1,
    min,
    max,
    float = false
  }: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const parseNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = float
      ? Number.parseFloat(event.target.value)
      : Number.parseInt(event.target.value);
    return number;
  };

  /**
   * Boosted onChange function that also provides the updated value of
   * the target to the onChange listener
   */
  const boostedOnChange = onChange
    ? (event: React.ChangeEvent<HTMLInputElement>) => {
        const parsedNumber = parseNumber(event);

        onChange(event, parsedNumber);
      }
    : undefined;
  const controlled = useControlled(value);
  const [inputRef, numberValue, handleChange, setCachedUncontrolledValue] =
    useControlledValue(value, defaultValue, boostedOnChange);

  const updateValue = (newValue: number) => {
    if (inputRef.current) {
      // for uncontrolled usage, the value has to be updated on dom side
      if (!controlled) {
        inputRef.current.value = `${newValue}`;
        // and the cache value has to be also updated
        setCachedUncontrolledValue(newValue);
      }
      const event = new Event("change", { bubbles: true });
      inputRef.current.dispatchEvent(event);

      onChange?.(undefined, newValue);
    }
  };

  const correctValue = (newValue: number | undefined) => {
    if (newValue == null) {
      return;
    }

    let correctedValue: number = newValue;

    if (min) {
      correctedValue = Math.max(min, newValue);
    }

    if (max) {
      correctedValue = Math.min(max, correctedValue);
    }

    updateValue(correctedValue);
  };

  return (
    <div className={`${prefix}--NumberInput`}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <div className={`${prefix}--NumberInput--input-container`}>
        <input
          id={id}
          ref={mergeRefs([ref, inputRef])}
          className={cx(
            `${prefix}--numberinput--input`,
            {
              [`${prefix}--numberinput--large`]: size === "large",
              [`${prefix}--numberinput--default`]:
                size === "default" || undefined,
              [`${prefix}--numberinput--small`]: size === "small",
              [`${prefix}--numberinput--error`]:
                (error || errorText) && !(warning || warningText),
              [`${prefix}--numberinput--warning`]:
                !(error || errorText) && (warning || warningText)
            },
            className
          )}
          type="number"
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange()}
          onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
            correctValue(numberValue);
            onBlur?.(event);
          }}
          onFocus={onFocus}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            correctValue(numberValue);
            onKeyDown?.(event);
          }}
          min={min}
          max={max}
          step={step}
        />
        {children}
      </div>
      {errorText && !warningText && (
        <div className={`${prefix}--NumberInput--error-text`}>
          <IconAlertCircle size={16} />
          {errorText}
        </div>
      )}
      {warningText && !errorText && (
        <div className={`${prefix}--NumberInput--warning-text`}>
          <IconAlertTriangle size={16} />
          {warningText}
        </div>
      )}
      <button
        onClick={() => {
          if (numberValue != null) {
            let newValue = numberValue + step;

            // Max the newValue to the given max if there is any
            if (max != null) {
              newValue = Math.min(max, newValue);
            }

            updateValue(newValue);
          }
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (numberValue != null) {
            let newValue = numberValue - step;

            // Max the newValue to the given max if there is any
            if (min != null) {
              newValue = Math.max(min, newValue);
            }

            updateValue(newValue);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default React.memo(
  forwardRef<HTMLInputElement, NumberInputProps>(NumberInput)
);
