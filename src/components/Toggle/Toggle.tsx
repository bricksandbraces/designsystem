import React, { ReactNode } from "react";
import cx from "classnames";
import { IconCheck } from "@tabler/icons";

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
  defaultChecked,
  label,
  className,
  children,
  onChange,
  ...rest
}: ToggleProps) => {
  return (
    <div className={cx("toggle", className)}>
      <input
        tabIndex={0}
        className="toggle--input"
        type="checkbox"
        value={value}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <label className="toggle--label" htmlFor={id}>
        <span className="toggle--switch">
          <svg
            className="toggle--checked"
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
          {label && <div className="toggle--label-text">{label}</div>}
          {children && <div className="toggle--content">{children}</div>}
        </div>
      </label>
    </div>
  );
};

export default Toggle;
