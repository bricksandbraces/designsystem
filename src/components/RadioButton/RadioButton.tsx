import React, { ReactNode } from "react";
import cx from "classnames";

export type RadioButtonProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * RadioButton ID
   */
  id?: string;

  /**
   * Children
   */
  children?: ReactNode;

  /**
   * RadioButton Value
   */
  value: string;

  /**
   * RadioButton Label
   */
  label?: string;

  /**
   * RadioButton Name
   */
  name?: string;

  /**
   * Checked values
   */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

const RadioButton = ({
  id,
  value,
  checked,
  name,
  defaultChecked,
  label,
  className,
  children,
  onChange,
  ...rest
}: RadioButtonProps) => {
  return (
    <div className={cx("radiobutton", className)}>
      <input
        tabIndex={0}
        className="radiobutton--input"
        type="radio"
        value={value}
        name={name}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <label className="radiobutton--label" htmlFor={id}>
        <svg
          className="radiobutton--selected"
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
          <circle cx="12" cy="12" r="9" />
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="currentColor"
            className="radiobutton--selected-mark"
          />
        </svg>
        <div>
          {label && <div className="radiobutton--label-text">{label}</div>}
          {children && <div className="radiobutton--content">{children}</div>}
        </div>
      </label>
    </div>
  );
};

export default RadioButton;
