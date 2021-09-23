import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type ToggleProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * Toggle ID
   */
  id: string;

  /**
   * Children
   */
  children?: ReactNode;

  /**
   * Toggle Value
   */
  value: string;

  /**
   * Toggle size
   */
  small?: boolean;

  /**
   * Toggle Label
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

const Toggle = ({
  id,
  value,
  checked,
  small,
  defaultChecked,
  label,
  className,
  children,
  onChange,
  ...rest
}: ToggleProps) => {
  return (
    <div
      className={cx(
        `${prefix}--toggle`,
        {
          [`${prefix}--toggle--default`]: !small,
          [`${prefix}--toggle--small`]: small
        },
        className
      )}
    >
      <input
        tabIndex={0}
        className={`${prefix}--toggle--input`}
        type="checkbox"
        value={value}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <label className={`${prefix}--toggle--label`} htmlFor={id}>
        <span className={`${prefix}--toggle--switch`}>
          <svg
            className={`${prefix}--toggle--checked`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </span>
        <div>
          {label && (
            <div className={`${prefix}--toggle--label-text`}>{label}</div>
          )}
          {children && (
            <div className={`${prefix}--toggle--content`}>{children}</div>
          )}
        </div>
      </label>
    </div>
  );
};

export default Toggle;
