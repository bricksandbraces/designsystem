import React, { ReactNode } from "react";
import cx from "classnames";

type RadioButtonGroupProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * RadioButtonGroup ID
   */
  id?: string;

  /**
   * Children
   */
  children?: ReactNode;

  /**
   * RadioButtonGroup Value
   */
  value?: string;

  /**
   * RadioButtonGroup Label
   */
  legendLabel?: string;

  /**
   * RadioButtonGroup Name
   */
  name?: string;

  /**
   * RadioButtonGroup Disabled state
   */
  disabled?: boolean;

  /**
   * OnChange values
   */
  onChange?: React.ChangeEventHandler<HTMLFieldSetElement>;
};

const RadioButtonGroup = ({
  id,
  value,
  name,
  legendLabel,
  disabled,
  className,
  children,
  onChange,
  ...rest
}: RadioButtonGroupProps) => {
  return (
    <fieldset
      className={cx("radiobutton--group", className)}
      {...rest}
      onChange={onChange}
      name={name}
      disabled={disabled}
    >
      {legendLabel && (
        <legend className="radiobutton--group-legend formlabel">
          {legendLabel}
        </legend>
      )}
      {children}
    </fieldset>
  );
};

export default RadioButtonGroup;
