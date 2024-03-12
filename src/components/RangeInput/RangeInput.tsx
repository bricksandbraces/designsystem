import cx from "classnames";
import Slider from "rc-slider";
import React, { useEffect, useState } from "react";
import { clamp } from "../../helpers/mathUtilities";
import { parseToNumber } from "../../helpers/numberUtilities";
import { useControlled } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { NumberInput } from "../NumberInput/NumberInput";
import { Label } from "../Typography/Typography";

export type RangeInputProps = {
  /**
   * RangeInput ClassName
   */
  className?: string;

  /**
   * RangeInput ID
   */
  id: string;

  /**
   * RangeInput Light
   */
  light?: boolean;

  /**
   * RangeInput Min
   */
  min: number;

  /**
   * RangeInput MinLabel
   */
  minLabel?: string;

  /**
   * RangeInput Max
   */
  max: number;

  /**
   * RangeInput MaxLabel
   */
  maxLabel?: string;

  /**
   * Step for the Thumb on the Track. Default is 1.
   */
  step?: number;

  /**
   * Marks for the Slider
   */
  marks?: Record<number, React.ReactNode>;

  /**
   * RangeInput Label
   */
  label: string;

  /**
   * RangeInput Value (Controlled)
   */
  value?: number | string;

  /**
   * RangeInput Default Value (Uncontrolled)
   */
  defaultValue?: number | string;

  /**
   * RangeInput OnChange Function
   */
  onChange?: (
    additionalData: { parsedValue?: number; newValue?: string },
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
      | Nullish
  ) => void;

  /**
   * RangeInput OnFocus
   */
  onFocus?: React.FocusEventHandler<HTMLDivElement>;

  /**
   * RangeInput OnBlur
   */
  onBlur?: React.FocusEventHandler<HTMLDivElement>;

  /**
   * RangeInput OnInputFocus
   */
  onInputFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * RangeInput OnInputBlur
   */
  onInputBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * RangeInput OnInputBlur
   */
  onInputKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * RangeInput Size
   */
  size?: "default" | "small" | "large";

  /**
   * RangeInput Disabled
   */
  disabled?: boolean;

  /**
   * RangeInput ReadOnly
   */
  readOnly?: boolean;

  /**
   * RangeInput Hide TextInput
   */
  hideInput?: boolean;

  /**
   * NumberInput Determines whether the inserted value is a float.
   */
  float?: boolean;
};

export const RangeInput = React.forwardRef(function RangeInput(
  {
    id,
    value,
    defaultValue,
    label,
    min,
    float = false,
    minLabel,
    max,
    maxLabel,
    light,
    size,
    step = 1,
    marks,
    disabled,
    hideInput,
    readOnly,
    className,
    onChange,
    onFocus,
    onBlur,
    onInputBlur,
    onInputFocus,
    onInputKeyDown
  }: RangeInputProps,
  ref: React.ForwardedRef<any>
) {
  const controlled = useControlled(value);

  const prepareValue = (val: string | number | undefined) => {
    let parsedInitialValue: string | number = val ?? min;
    if (typeof parsedInitialValue === "string") {
      parsedInitialValue = parseToNumber(parsedInitialValue, float);
    }
    return parsedInitialValue;
  };

  const preparedValue = `${prepareValue(controlled ? value : defaultValue)}`;
  const [textValue, setTextValue] = useState<string>(preparedValue);

  const parsedValue = parseToNumber(textValue, float);
  const [sliderValue, setLocalSliderValue] = useState<number>(parsedValue);

  useEffect(() => {
    if (controlled) {
      const newPreparedValue = `${prepareValue(value)}`;
      setTextValue(newPreparedValue);
      const newParsedValue = parseToNumber(newPreparedValue, float);
      setLocalSliderValue(newParsedValue);
    }
  }, [value]);

  const syncTextToSliderValue = (
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const newParsedValue = clamp(parseToNumber(textValue, float), min, max);
    let newValue: number;
    if (!Number.isNaN(newParsedValue)) {
      if (!controlled) {
        setLocalSliderValue(newParsedValue);
      }
      newValue = newParsedValue;
    } else {
      if (!controlled) {
        setTextValue(`${sliderValue}`);
      }
      newValue = sliderValue;
    }

    onChange?.({ newValue: `${newValue}`, parsedValue: newValue }, event);
  };

  return (
    <div
      className={cx(
        `${prefix}--rangeinput`,
        {
          [`${prefix}--rangeinput-light`]: light,
          [`${prefix}--rangeinput-disabled`]: disabled,
          [`${prefix}--rangeinput-readonly`]: readOnly
        },
        className
      )}
    >
      <Label htmlFor={id} id={`${id}-label`}>
        {label}
      </Label>
      <div className={cx(`${prefix}--rangeinput-container`)}>
        {!hideInput && (
          <NumberInput
            hideButtons
            light={light}
            className={cx(`${prefix}--rangeinput-numberinput`)}
            disabled={disabled}
            id={id}
            size={size}
            min={min}
            max={max}
            readOnly={readOnly}
            step={step}
            value={textValue}
            onBlur={(event) => {
              syncTextToSliderValue(event);
              onInputBlur?.(event);
            }}
            onFocus={onInputFocus}
            onChange={(params) => {
              setTextValue(params.newValue ?? "");
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                syncTextToSliderValue(event);
              }
              onInputKeyDown?.(event);
            }}
          />
        )}
        <div className={cx(`${prefix}--rangeinput-slider__container`)}>
          <span className={cx(`${prefix}--rangeinput-slider__label`)}>
            {minLabel ?? min}
          </span>
          <Slider
            className={cx(`${prefix}--rangeinput-slider`)}
            min={min}
            max={max}
            disabled={disabled || readOnly}
            value={sliderValue}
            step={step}
            marks={marks}
            ref={ref}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(newValues) => {
              const newValue = Array.isArray(newValues)
                ? newValues[0]
                : newValues;
              if (!controlled) {
                setLocalSliderValue(newValue);
                setTextValue(`${newValue}`);
              }

              onChange?.(
                { parsedValue: newValue, newValue: `${newValue}` },
                null
              );
            }}
          />
          <span className={cx(`${prefix}--rangeinput-slider__label`)}>
            {maxLabel ?? max}
          </span>
        </div>
      </div>
    </div>
  );
});
