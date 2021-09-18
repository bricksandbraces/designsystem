import React, { ReactNode, useState } from "react";
import cx from "classnames";
import TextInput from "../TextInput/TextInput";
import FormLabel from "../FormLabel/FormLabel";

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
   * Children
   */
  children?: ReactNode;

  /**
   * RangeInput Value
   */
  value: string;

  /**
   * RangeInput Min
   */
  min: number;

  /**
   * RangeInput Max
   */
  max: number;

  /**
   * RangeInput Label
   */
  label?: string;

  /**
   * Checked values
   */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

const RangeInput = ({
  id,
  value,
  min,
  max,
  checked,
  defaultChecked,
  label,
  className,
  children,
  onChange,
  ...rest
}: RangeInputProps) => {
  return (
    <div className="range--container">
      <div className="range">
        <div className="range--thumb" tabIndex={0} />
        <div className="range--track" />
        <div
          className="range--track-filled"
          style={{ transform: "translate(0%, -50%) scaleX(0)" }}
        />
        <input
          aria-label="range"
          id="range"
          className="range--input"
          type="range"
          step="1"
          min="0"
          max="100"
        />
      </div>
      <TextInput />
    </div>
  );
};

export default RangeInput;
