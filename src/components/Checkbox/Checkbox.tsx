import React from "react";
import cx from "classnames";

type CheckboxProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * Checkbox ID
   */
  id?: string;

  /**
   * Checkbox Value
   */
  value?: string;

  /**
   * Checkbox Label
   */
  label?: string;

  /**
   * Checked values
   */
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
};

const Checkbox = ({
  id,
  value,
  checked,
  defaultChecked,
  label,
  className,
  ...rest
}: CheckboxProps) => {
  return (
    <div className={cx("form-check checkbox", className)}>
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        {...rest}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
