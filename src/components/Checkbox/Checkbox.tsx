import React, { ReactNode } from "react";
import cx from "classnames";

type CheckboxProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * Checkbox ID
   */
  id: string;

  /**
   * Children
   */
  children?: ReactNode;

  /**
   * Checkbox Value
   */
  value: string;

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
  children,
  onChange,
  ...rest
}: CheckboxProps) => {
  return (
    <div className={cx("checkbox", className)}>
      <input
        tabIndex={0}
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
        <svg
          className="checkbox--check"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            className="checkbox--check-box"
          />
          <path d="M9 12l2 2l4 -4" className="checkbox--check-mark" />
        </svg>

        <div>
          {label && <div className="checkbox--label-text">{label}</div>}
          {children && <div className="checkbox--content">{children}</div>}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
