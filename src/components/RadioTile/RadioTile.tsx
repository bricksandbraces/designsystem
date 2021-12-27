import { IconCircleCheck } from "@tabler/icons";
import cx from "classnames";
import React, { ReactNode } from "react";
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
   * RadioTile Light
   */
  light?: boolean;

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
   * RadioTile OnFocus Function
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * RadioTile OnBlur Function
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * RadioTile Disabled
   */
  disabled?: boolean;

  /**
   * RadioTile ReadOnly
   */
  readOnly?: boolean;
};

export const RadioTile = React.forwardRef(function RadioTile(
  {
    id,
    value,
    checked,
    name,
    defaultChecked,
    className,
    readOnly,
    disabled,
    light,
    children,
    onChange,
    ...rest
  }: RadioTileProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      className={cx(
        `${prefix}--radiotile`,
        {
          [`${prefix}--radiotile-light`]: light,
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
        ref={ref}
        {...rest}
      />
      <label
        className={`${prefix}--radiotile-label ${prefix}--tile ${prefix}--tile-clickable`}
        htmlFor={id}
      >
        {children}
        <IconCircleCheck
          size={24}
          className={`${prefix}--radiotile-selected`}
        />
      </label>
    </div>
  );
});
