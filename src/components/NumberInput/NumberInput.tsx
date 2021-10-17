import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import useControlled from "../../hooks/useControlled";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

type NumberInputProps = {
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
   * NumberInput Error State & Text
   */
  error?: boolean;
  errorText?: string;

  /**
   * NumberInput Warning State & Text
   */
  warning?: boolean;
  warningText?: string;

  /**
   * NumberInput Size
   */
  size?: "default" | "small" | "large";

  /**
   * NumberInput DefaultValue
   */
  defaultValue?: number;

  /**
   * NumberInput Value
   */
  value?: number;

  /**
   * NumberInput Min
   */
  min?: number;

  /**
   * NumberInput Max
   */
  max?: number;

  /**
   * NumberInput Fluid
   */
  fluid?: boolean;

  /**
   * NumberInput OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * NumberInput Children
   */
  children?: React.ReactNode;
};

const NumberInput = (
  {
    id,
    fluid,
    className,
    label,
    placeholder,
    value,
    defaultValue,
    onChange,
    min,
    max,
    error,
    errorText,
    warning,
    warningText,
    size = "default",
    children
  }: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const controlled = useControlled(value);
  const [numberValue, setNumberValue] = useState<number>(
    (controlled ? value : defaultValue) ?? undefined
  );

  useEffect(() => {
    if (controlled) {
      setNumberValue(value ?? undefined);
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
          min={min}
          max={max}
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
          type="number"
          placeholder={!fluid ? placeholder : ""}
          value={numberValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (!controlled) {
              setNumberValue(event.target.valueAsNumber);
            }
            onChange?.(event);
          }}
        />
        {fluid && (
          <label
            className={cx(`${prefix}--textinput--fluid-label`, {
              [`${prefix}--textinput--fluid-label__value`]:
                numberValue !== undefined
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

export default forwardRef<HTMLInputElement, NumberInputProps>(NumberInput);
