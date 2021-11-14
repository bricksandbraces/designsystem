import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type CheckboxProps = {
  /**
   * Checkbox ClassName
   */
  className?: string;

  /**
   * Checkbox Id
   */
  id: string;

  /**
   * Checkbox Children
   */
  children?: React.ReactNode;

  /**
   * Checkbox Label
   */
  label?: string;

  /**
   * Checkbox Read-Only
   */
  readOnly?: boolean;

  /**
   * Checkbox Checked property (controlled usage)
   */
  checked?: boolean;

  /**
   * Checkbox Default checked property (uncontrolled usage)
   */
  defaultChecked?: boolean;

  /**
   * Checkbox OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * Checkbox Disabled
   */
  disabled?: boolean;

  /**
   * Checkbox Value
   */
  value: string;
};

const Checkbox = (
  {
    id,
    value,
    checked,
    defaultChecked,
    label,
    readOnly,
    className,
    disabled,
    children,
    onChange,
    ...rest
  }: CheckboxProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <div
      className={cx(
        `${prefix}--checkbox`,
        {
          [`${prefix}--checkbox-disabled`]: disabled,
          [`${prefix}--checkbox-readonly`]: readOnly
        },
        className
      )}
    >
      <input
        tabIndex={0}
        ref={ref}
        className={`${prefix}--checkbox-input`}
        type="checkbox"
        value={value}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <label className={`${prefix}--checkbox-label`} htmlFor={id}>
        <svg
          className={`${prefix}--checkbox-check`}
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
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            className={`${prefix}--checkbox-check__box`}
          />
          <path
            d="M9 12l2 2l4 -4"
            className={`${prefix}--checkbox-check__mark`}
          />
        </svg>

        <div>
          {label && (
            <div className={`${prefix}--checkbox-label__text`}>{label}</div>
          )}
          {children && (
            <div className={`${prefix}--checkbox-content`}>{children}</div>
          )}
        </div>
      </label>
    </div>
  );
};

export default React.forwardRef(Checkbox);
