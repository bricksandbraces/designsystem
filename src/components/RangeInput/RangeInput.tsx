import React, { useState } from "react";
import cx from "classnames";
import useControlled from "../../hooks/useControlled";

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

  /**
   * RangeInput Max
   */
  max: number;

  /** Step for the thumb on the track. Default is 1. */
  step?: number;

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
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  disabled?: boolean;
};

const RangeInput = ({
  id,
  value,
  defaultValue,
  label,
  min,
  max,
  step = 1,
  disabled,
  className,
  onChange
}: RangeInputProps) => {
  const controlled = useControlled(value);
  const [localValue, setLocalValue] = useState<number>(
    (controlled ? value ?? min : defaultValue ?? min) * 1
  );
  return (
    <div className={cx("range-input--container", className)}>
      <label className="range-input--label" htmlFor={id}>
        {label}
      </label>
      <div className="range-input--slider-container">
        <div className="range-input--slider">
          <span className="range-input--slider-container">{min}</span>
          <div className="range-input--slider--thumb" />
          <div className="range-input--slider--track" />
          <div className="range-input--slider--track-filled" />
          <span>{max}</span>
        </div>
        <input
          className="range-input--range-input"
          type="number"
          disabled={disabled}
          id={id}
          step={step}
          min={max}
          max={min}
          value={localValue}
        />
      </div>
    </div>
  );
};

export default RangeInput;
