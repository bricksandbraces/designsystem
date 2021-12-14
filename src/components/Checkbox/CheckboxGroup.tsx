import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type CheckboxGroupProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * CheckboxGroup ID
   */
  id?: string;

  /**
   * Children
   */
  children?: React.ReactNode;

  /**
   * CheckboxGroup Value (Controlled). Use null for nothing selected but controlled.
   */
  value?: string | null;

  /**
   * CheckboxGroup Default Value (Uncontrolled)
   */
  defaultValue?: string;

  /**
   * CheckboxGroup Label
   */
  legendLabel?: string;

  /**
   * CheckboxGroup Name
   */
  name: string;

  /**
   * CheckboxGroup Disabled state
   */
  disabled?: boolean;

  /**
   * CheckboxGroup Orientation
   */
  orientation?: "vertical" | "horizontal";

  /**
   * OnChange values
   */
  onChange?: (
    newValue: string | null,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const CheckboxGroup = (
  {
    id,
    legendLabel,
    disabled,
    className,
    children,
    orientation,
    name
  }: CheckboxGroupProps,
  ref: React.ForwardedRef<HTMLFieldSetElement>
) => {
  return (
    <fieldset
      id={id}
      className={cx(
        `${prefix}--checkbox-group ${prefix}--checkbox-group__${orientation}`,
        className
      )}
      name={name}
      disabled={disabled}
      ref={ref}
    >
      {legendLabel && (
        <legend
          className={`${prefix}--checkbox-group__legend ${prefix}--typography-label`}
        >
          {legendLabel}
        </legend>
      )}
      {children}
    </fieldset>
  );
};

export default React.forwardRef(CheckboxGroup);
