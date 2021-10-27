import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type RadioButtonProps = {
  /**
   * RadioButton ClassName
   */
  className?: string;

  /**
   * RadioButton Id
   */
  id: string;

  /**
   * RadioButton Children
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
   * RadioButton Checked
   */
  checked?: boolean;

  /**
   * RadioButton DefaultChecked
   */
  defaultChecked?: boolean;

  /**
   * RadioButton OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * RadioButton Disabled
   */
  disabled?: boolean;

  /**
   * RadioButton ReadOnly
   */
  readOnly?: boolean;
};

const RadioButton = ({
  id,
  value,
  checked,
  name,
  defaultChecked,
  label,
  className,
  readOnly,
  disabled,
  children,
  onChange,
  ...rest
}: RadioButtonProps) => {
  return (
    <div
      className={cx(
        `${prefix}--radiobutton`,
        {
          [`${prefix}--radiobutton-readonly`]: readOnly,
          [`${prefix}--radiobutton-disabled`]: disabled
        },
        className
      )}
    >
      <input
        tabIndex={0}
        className={`${prefix}--radiobutton-input`}
        type="radio"
        value={value}
        name={name}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <label className={`${prefix}--radiobutton-label`} htmlFor={id}>
        <svg
          className={`${prefix}--radiobutton-selected`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle
            cx="12"
            cy="12"
            r="9"
            className={`${prefix}--radiobutton-selected__box`}
          />
        </svg>
        <div>
          {label && (
            <div className={`${prefix}--radiobutton-label__text`}>{label}</div>
          )}
          {children && (
            <div className={`${prefix}--radiobutton-content`}>{children}</div>
          )}
        </div>
      </label>
    </div>
  );
};

export default RadioButton;
