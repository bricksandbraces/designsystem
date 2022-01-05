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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${prefix}--radiotile-selected`}
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
          <circle
            cx="12"
            cy="12"
            r="9"
            className={`${prefix}--radiotile-selected__check-box`}
          />
          <path
            d="M9 12l2 2l4 -4"
            className={`${prefix}--radiotile-selected__check-mark`}
          />
        </svg>
      </label>
    </div>
  );
});
