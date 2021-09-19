import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import cx from "classnames";
import "rc-slider/assets/index.css";
import useControlled from "../../hooks/useControlled";
import { clamp } from "../../helpers/mathUtilities";

type RangeInputProps = {
  /**
   * React className
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

  /** Step for the thumb on the track. Default is 1. */
  step?: number;

  /**
   * marks for the slider
   */
  marks?: Record<number, React.ReactNode>;

  /**
   * RangeInput Label
   */
  label: string;

  /**
   * RangeInput value (controlled)
   */
  value?: number;
  /**
   * RangeInput default value (uncontrolled)
   */
  defaultValue?: number;
  onChange?: (newValue: number) => void;

  disabled?: boolean;

  hideTextInput?: boolean;
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
  step = 1,
  marks,
  disabled,
  hideTextInput,
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
    <div className={cx("range-input--container", className)}>
      <label className="range-input--label" htmlFor={id} id={`${id}-label`}>
        {label}
      </label>
      <div className="range-input--input-container">
        <div className="range-input--slider-container">
          <span className="range-input--slider-label range-input--slider-label--min">
            {minLabel ?? min}
          </span>
          <Slider
            className="range-input--slider"
            min={min}
            max={max}
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
          <span className="range-input--slider-label range-input--slider-label--max">
            {maxLabel ?? max}
          </span>
        </div>
        <input
          className="range-input--range-input"
          type={hideTextInput ? "hidden" : "number"}
          disabled={disabled}
          id={id}
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={(event) => {
            const newValue = clamp((event.target.value as any) * 1, min, max);
            if (!controlled) {
              setLocalValue(newValue);
            }

            onChange?.(newValue);
          }}
        />
      </div>
    </div>
  );
};

export default RangeInput;
