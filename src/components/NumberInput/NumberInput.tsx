import React from "react";
import cx from "classnames";
import {
  IconAlertCircle,
  IconAlertTriangle,
  IconMinus,
  IconPlus
} from "@tabler/icons";
import { prefix } from "../../settings";
import { Label } from "../Typography/Typography";
import { filterForKeys } from "../../helpers/keyboardUtilities";
import { parseToNumber } from "../../helpers/numberUtilities";
import mergeRefs from "react-merge-refs";
import { useControlledInput } from "../../hooks/useControlled";
import { IconOnlyButton } from "../Button/IconOnlyButton";
import { IconOnlyButtonGroup } from "../Button/IconOnlyButtonGroup";

export type NumberInputProps = {
  /**
   * NumberInput ClassName
   */
  className?: string;

  /**
   * NumberInput Label
   */
  label?: string;

  /**
   * NumberInput Placeholder
   */
  placeholder?: string;

  /**
   * NumberInput Id
   */
  id?: string;

  /**
   * NumberInput Error State
   */
  error?: boolean;

  /**
   * NumberInput ErrorText
   */
  errorText?: string;

  /**
   * NumberInput Warning State
   */
  warning?: boolean;

  /**
   * NumberInput WarningText
   */
  warningText?: string;

  /**
   * NumberInput Size
   */
  size?: "default" | "small" | "large";

  /**
   * NumberInput Autocomplete
   */
  autoComplete?: "off" | "on";

  /**
   * NumberInput Default Value
   */
  defaultValue?: number | string;

  /**
   * NumberInput Value
   */
  value?: number | string;

  /**
   * NumberInput Min
   */
  min?: number;

  /**
   * NumberInput Max
   */
  max?: number;

  /**
   * NumberInput Step
   */
  step?: number;

  /**
   * NumberInput Fluid
   */
  fluid?: boolean;

  /**
   * NumberInput Light
   */
  light?: boolean;

  /**
   * NumberInput HideButtons
   */
  hideButtons?: boolean;

  /**
   * NumberInput Disabled
   */
  disabled?: boolean;

  /**
   * NumberInput ReadOnly
   */
  readOnly?: boolean;

  /**
   * NumberInput OnChange Function
   */
  onChange?: (
    additionalData: { parsedValue?: number; newValue?: string },
    event?: React.ChangeEvent<HTMLInputElement> | undefined
  ) => void;

  /**
   * NumberInput OnBlur
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * NumberInput OnFocus
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * NumberInput OnKeyFocus
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * NumberInput Children
   */
  children?: React.ReactNode;

  /**
   * NumberInput Determines whether the inserted value is a float.
   */
  float?: boolean;
};

export const NumberInput = React.forwardRef(function NumberInput(
  {
    id,
    className,
    label,
    placeholder,
    value,
    disabled,
    readOnly,
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
    hideButtons,
    light,
    step = 1,
    min,
    max,
    fluid,
    float = false
  }: NumberInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const [inputRef, textValue, handleChange, setValueManually] =
    useControlledInput(
      value != null ? `${value}` : undefined,
      defaultValue != null ? `${defaultValue}` : undefined,
      onChange &&
        ((newValue, event) => {
          const parsedValue = parseToNumber(newValue, float);

          onChange(
            {
              newValue,
              parsedValue
            },
            event as React.ChangeEvent<HTMLInputElement>
          );
        })
    );

  const updateValue = (newValue: string) => {
    if (inputRef.current) {
      setValueManually(newValue);

      const parsedValue = parseToNumber(newValue, float);

      onChange?.({ newValue, parsedValue }, undefined);
    }
  };

  const correctValIntoBorders = (newValue: number | undefined) => {
    if (newValue == null || Number.isNaN(newValue)) {
      return;
    }

    let correctedValue: number = newValue;

    if (min) {
      correctedValue = Math.max(min, newValue);
    }

    if (max) {
      correctedValue = Math.min(max, correctedValue);
    }

    updateValue(`${correctedValue}`);
  };

  return (
    <div
      className={cx(
        `${prefix}--numberinput`,
        {
          [`${prefix}--numberinput-light`]: light,
          [`${prefix}--numberinput-fluid`]: fluid,
          [`${prefix}--numberinput-disabled`]: disabled,
          [`${prefix}--numberinput-readonly`]: readOnly
        },
        className
      )}
    >
      {label && !fluid && <Label htmlFor={id}>{label}</Label>}
      <div className={`${prefix}--numberinput-input__container`}>
        <input
          id={id}
          ref={mergeRefs([ref, inputRef])}
          className={cx(`${prefix}--numberinput-input`, {
            [`${prefix}--numberinput-${size}`]: !fluid,
            [`${prefix}--numberinput-error`]:
              (error || errorText) && !(warning || warningText),
            [`${prefix}--numberinput-warning`]:
              !(error || errorText) && (warning || warningText)
          })}
          type="number"
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange()}
          onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
            const parsedValue = parseToNumber(textValue, float);
            correctValIntoBorders(parsedValue);
            onBlur?.(event);
          }}
          onFocus={onFocus}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              const parsedValue = parseToNumber(textValue, float);
              correctValIntoBorders(parsedValue);
              onKeyDown?.(event);
            } else {
              filterForKeys(
                ["`", "e", "+", "´"],
                (ev: React.KeyboardEvent<HTMLInputElement>) => {
                  ev.preventDefault();
                  onKeyDown?.(ev);
                }
              )(event);
            }
          }}
          min={min}
          max={max}
          step={step}
        />
        {!hideButtons && (
          <IconOnlyButtonGroup
            withDivider
            className={`${prefix}--numberinput-spin`}
          >
            <IconOnlyButton
              disabled={disabled || readOnly}
              kind="ghost"
              className={`${prefix}--numberinput-spin__button`}
              hideTooltip
              size={size}
              onClick={() => {
                if (textValue != null) {
                  const parsedValue = parseToNumber(textValue, float);
                  if (Number.isNaN(parsedValue)) {
                    return;
                  }
                  let newValue = parsedValue - step;

                  // Max the newValue to the given max if there is any
                  if (min != null) {
                    newValue = Math.max(min, newValue);
                  }

                  updateValue(`${newValue}`);
                }
              }}
              icon={<IconMinus />}
            />
            <IconOnlyButton
              disabled={disabled || readOnly}
              kind="ghost"
              className={`${prefix}--numberinput-spin__button`}
              hideTooltip
              size={size}
              onClick={() => {
                if (textValue != null) {
                  const parsedValue = parseToNumber(textValue, float);
                  if (Number.isNaN(parsedValue)) {
                    return;
                  }
                  let newValue = parsedValue + step;

                  // Max the newValue to the given max if there is any
                  if (max != null) {
                    newValue = Math.min(max, newValue);
                  }

                  updateValue(`${newValue}`);
                }
              }}
              icon={<IconPlus />}
            />
          </IconOnlyButtonGroup>
        )}
        {fluid && (
          <label
            className={cx(`${prefix}--numberinput-fluid__label`, {
              [`${prefix}--numberinput-fluid__label-value`]:
                textValue?.length ?? 0 > 0
            })}
          >
            {placeholder}
          </label>
        )}
        {children}
      </div>
      {errorText && !warningText && (
        <div className={`${prefix}--numberinput-error__text`}>
          <IconAlertCircle size={16} />

          {errorText}
        </div>
      )}
      {warningText && !errorText && (
        <div className={`${prefix}--numberinput-warning__text`}>
          <IconAlertTriangle size={16} />

          {warningText}
        </div>
      )}
    </div>
  );
});
