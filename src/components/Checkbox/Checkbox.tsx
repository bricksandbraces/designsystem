import cx from "classnames";
import React, { useEffect, useRef } from "react";
import { mergeRefs } from "react-merge-refs";
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
   * Checkbox OnBlur Function
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Checkbox OnFocus Function
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Checkbox Disabled
   */
  disabled?: boolean;

  /**
   * Checkbox Indeterminate
   */
  indeterminate?: boolean;

  /**
   * Checkbox Value
   */
  value: string;
};

export const Checkbox = React.forwardRef(function Checkbox(
  {
    id,
    value,
    checked,
    defaultChecked,
    indeterminate,
    label,
    readOnly,
    className,
    disabled,
    children,
    onChange,
    onBlur,
    onFocus,
    ...rest
  }: CheckboxProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const inputRef = useRef<HTMLInputElement>();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate ?? false;
    }
  }, [indeterminate]);
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
        ref={mergeRefs([ref, inputRef])}
        className={`${prefix}--checkbox-input`}
        type="checkbox"
        value={value}
        aria-checked={indeterminate ? "mixed" : undefined}
        data-checkbox-state={
          indeterminate
            ? "mixed"
            : JSON.stringify(checked ?? defaultChecked ?? false)
        }
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
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
          {indeterminate ? (
            <line
              className={`${prefix}--checkbox-check__indeterminate-mark`}
              x1="9"
              y1="12"
              x2="15"
              y2="12"
            />
          ) : (
            <path
              d="M9 12l2 2l4 -4"
              className={`${prefix}--checkbox-check__mark`}
            />
          )}
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
});
