import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type ToggleProps = {
  /**
   * Toggle ClassName
   */
  className?: string;

  /**
   * Toggle Id
   */
  id: string;

  /**
   * Toggle Children
   */
  children?: ReactNode;

  /**
   * Toggle Value
   */
  value: string;

  /**
   * Toggle Size
   */
  size?: "small" | "default";

  /**
   * Toggle Label
   */
  label?: string;

  /**
   * Toggle Checked
   */
  checked?: boolean;

  /**
   * Toggle DefaultChecked
   */
  defaultChecked?: boolean;

  /**
   * Toggle OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * Toggle Disabled
   */
  disabled?: boolean;

  /**
   * Toggle ReadOnly
   */
  readOnly?: boolean;
};

const Toggle = ({
  id,
  value,
  checked,
  size = "default",
  defaultChecked,
  label,
  className,
  disabled,
  readOnly,
  children,
  onChange,
  ...rest
}: ToggleProps) => {
  return (
    <div
      className={cx(
        `${prefix}--toggle ${prefix}--toggle-${size}`,
        {
          [`${prefix}--toggle-disabled`]: disabled,
          [`${prefix}--toggle-readonly`]: readOnly
        },
        className
      )}
    >
      <input
        tabIndex={0}
        className={`${prefix}--toggle-input`}
        type="checkbox"
        value={value}
        id={id}
        checked={checked}
        disabled={disabled}
        readOnly={readOnly}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <label className={`${prefix}--toggle-label`} htmlFor={id}>
        <span className={`${prefix}--toggle-switch`}>
          {size === "small" && (
            <svg
              className={`${prefix}--toggle-checked`}
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
          )}
        </span>
        <div>
          {label && (
            <div className={`${prefix}--toggle-label__text`}>{label}</div>
          )}
          {children && (
            <div className={`${prefix}--toggle-content`}>{children}</div>
          )}
        </div>
      </label>
    </div>
  );
};

export default Toggle;
