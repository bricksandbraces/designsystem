import React, { ReactNode } from "react";
import cx from "classnames";
import { IconCircleCheck } from "@tabler/icons";
import { prefix } from "../../settings";

export type RadioTileProps = {
  /**
   * RadioTile ClassName
   */
  className?: string;

  /**
   * RadioTile Id
   */
  id: string;

  /**
   * RadioTile Children
   */
  children?: ReactNode;

  /**
   * RadioTile Value
   */
  value: string;

  /**
   * RadioTile Label
   */
  label?: string;

  /**
   * RadioTile Name
   */
  name?: string;

  /**
   * RadioTile Checked
   */
  checked?: boolean;

  /**
   * RadioTile DefaultChecked
   */
  defaultChecked?: boolean;

  /**
   * RadioTile OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * RadioTile Disabled
   */
  disabled?: boolean;

  /**
   * RadioTile ReadOnly
   */
  readOnly?: boolean;
};

const RadioTile = ({
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
}: RadioTileProps) => {
  return (
    <div
      className={cx(
        `${prefix}--radiotile`,
        {
          [`${prefix}--radiotile-readonly`]: readOnly,
          [`${prefix}--radiotile-disabled`]: disabled
        },
        className
      )}
    >
      <input
        tabIndex={0}
        className={`${prefix}--radiotile-input`}
        type="radio"
        value={value}
        name={name}
        disabled={disabled}
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <label
        className={`${prefix}--radiotile-label ${prefix}--tile ${prefix}--tile-clickable`}
        htmlFor={id}
      >
        {children}
        <IconCircleCheck
          size={16}
          className={`${prefix}--radiotile-selected`}
        />
      </label>
    </div>
  );
};

export default RadioTile;
