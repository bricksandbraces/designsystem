import React, { useState } from "react";
import cx from "classnames";
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
  disabled,
  hideTextInput,
  className,
  onKeyDown,
  onChange
}: RangeInputProps) => {
  const controlled = useControlled(value);
  const initialValue = (controlled ? value ?? min : defaultValue ?? min) * 1;
  const [sliderValue, setLocalValue] = useState<number>(initialValue);
  const [textValue, setTextValue] = useState<string>(`${initialValue}`);

  /**
   * Calculates a new Slider `value` and `left` (thumb offset) given a `clientX`,
   * `value`, or neither of those.
   * - If `clientX` is specified, it will be used in
   *   conjunction with the Slider's bounding rectangle to calculate the new
   *   values.
   * - If `clientX` is not specified and `value` is, it will be used to
   *   calculate new values as though it were the current value of the Slider.
   * - If neither `clientX` nor `value` are specified, `this.props.value` will
   *   be used to calculate the new values as though it were the current value
   *   of the Slider.
   *
   * @param {object} params
   * @param {number} [params.clientX] Optional clientX value expected to be from
   *   an event fired by one of the Slider's `DRAG_EVENT_TYPES` events.
   * @param {number} [params.value] Optional value use during calculations if
   *   clientX is not provided.
   * @param {boolean} [params.useRawValue=false] `true` to use the given value as-is.
   */
  const calcValue = (
    element: HTMLElement,
    clientX: number,
    valueToCalc: number,
    useRawValue = false
  ) => {
    const range = max - min;
    const boundingRect = element.getBoundingClientRect();
    const totalSteps = range / step;
    let width = boundingRect.right - boundingRect.left;

    // Enforce a minimum width of at least 1 for calculations
    if (width <= 0) {
      width = 1;
    }

    // If a clientX is specified, use it to calculate the leftPercent. If not,
    // use the provided value or state's value to calculate it instead.
    let leftPercent;
    if (clientX != null) {
      const leftOffset = clientX - boundingRect.left;
      leftPercent = leftOffset / width;
    } else {
      if (valueToCalc == null) {
        valueToCalc = sliderValue;
      }
      // prevent NaN calculation if the range is 0
      leftPercent = range === 0 ? 0 : (valueToCalc - min) / range;
    }

    if (useRawValue) {
      // Adjusts only for min/max of thumb position
      return {
        value: valueToCalc,
        left: Math.min(1, Math.max(0, leftPercent)) * 100
      };
    }

    let steppedValue = Math.round(leftPercent * totalSteps) * step;
    const steppedPercent = clamp(steppedValue / range, 0, 1);

    steppedValue = clamp(steppedValue + min, min, max);

    return { steppedValue, left: steppedPercent * 100 };
  };

  const {steppedValue, left} = calcValue();

  return (
    <div className={cx("range-input--container", className)}>
      <label className="range-input--label" htmlFor={id} id={`${id}-label`}>
        {label}
      </label>
      <div className="range-input--slider-container">
        <div className="range-input--slider">
          <span className="range-input--slider-label range-input--slider-label--min">
            {minLabel ?? min}
          </span>
          <div
            className="range-input--slider--thumb"
            tabIndex={0}
            role="slider"
            aria-labelledby={`${id}-label`}
            aria-valuemax={max}
            aria-valuemin={min}
            aria-valuenow={sliderValue}
            style={{ left: `${left}px` }}
          />
          <div className="range-input--slider--track" />
          <div
            className="range-input--slider--track-filled"
            style={{ transform: `translate(0%, -50%) scaleX(${left / 100})` }}
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
          step={step}
          min={max}
          max={min}
          value={sliderValue}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setTextValue(`${sliderValue}`);
            }
          }}
          onBlur={(event) => {
            const parsedValue = (event.target.value as any) * 1;
            if (!Number.isNaN(parsedValue)) {
              setLocalValue(parsedValue);
            }
          }}
          onChange={(event) => {
            setLocalValue((event.target.value as any) * 1);
          }}
        />
      </div>
    </div>
  );
};

export default RangeInput;
