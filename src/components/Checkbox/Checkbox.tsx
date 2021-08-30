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
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

const Checkbox = ({
  id,
  value,
  checked,
  defaultChecked,
  label,
  className,
  onChange,
  ...rest
}: CheckboxProps) => {
  return (
    <div className={cx("checkbox", className)}>
      <input
        className="checkbox--input"
        type="checkbox"
        value={value}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <label className="checkbox--label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
