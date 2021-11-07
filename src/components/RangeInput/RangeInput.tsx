import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import cx from "classnames";
import "rc-slider/assets/index.css";
import useControlled from "../../hooks/useControlled";
import { clamp } from "../../helpers/mathUtilities";
import { prefix } from "../../settings";
import Label from "../Typography/Label";
import NumberInput from "../NumberInput/NumberInput";

type RangeInputProps = {
  /**
   * RangeInput ClassName
   */
  className?: string;

  /**
   * RangeInput ID
   */
  id: string;

  /**
   * RangeInput Min
   */
  min: number;
  minLabel?: string;

  /**
   * RangeInput Max
   */
  max: number;
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
  value?: number;

  /**
   * RangeInput Default Value (Uncontrolled)
   */
  defaultValue?: number;

  /**
   * RangeInput OnChange Function
   */
  onChange?: (newValue: number) => void;

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
};

const RangeInput = ({
  id,
  value,
  defaultValue,
  label,
  min,
  minLabel,
  max,
  maxLabel,
  size,
  step = 1,
  marks,
  disabled,
  hideInput,
  readOnly,
  className,
  onChange
}: RangeInputProps) => {
  const controlled = useControlled(value);
  const initialValue = controlled ? value ?? min : defaultValue ?? min;
  const [sliderValue, setLocalValue] = useState<number>(initialValue);

  useEffect(() => {
    if (controlled) {
      setLocalValue(value ?? min);
    }
  }, [value]);

  return (
    <div
      className={cx(
        `${prefix}--rangeinput`,
        {
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
            className={cx(`${prefix}--rangeinput-numberinput`)}
            disabled={disabled}
            id={id}
            size={size}
            min={min}
            max={max}
            readOnly={readOnly}
            step={step}
            value={sliderValue}
            onChange={(event) => {
              if (event) {
                const newValue = clamp(
                  (event.target.value as any) * 1,
                  min,
                  max
                );
                if (!controlled) {
                  setLocalValue(newValue);
                }
                onChange?.(newValue);
              }
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
            onChange={(newValue) => {
              if (!controlled) {
                setLocalValue(newValue);
              }

              onChange?.(newValue);
            }}
          />
          <span className={cx(`${prefix}--rangeinput-slider__label`)}>
            {maxLabel ?? max}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
