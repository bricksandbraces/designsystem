import React, { ReactNode } from "react";
import cx from "classnames";
import { IconSquare, IconSquareCheck } from "@tabler/icons";

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
   * Children
   */
  children?: ReactNode;

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
  children,
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
        <IconSquare size={20} stroke={1.5} className="checkbox--unchecked" />
        <IconSquareCheck size={20} stroke={1.5} className="checkbox--checked" />
        <div>
          {label && <div className="checkbox--label-text">{label}</div>}
          {children && <div className="checkbox--content">{children}</div>}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
