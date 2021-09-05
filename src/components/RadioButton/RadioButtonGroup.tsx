import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
import cx from "classnames";
import { RadioButtonProps } from "./RadioButton";
import useControlled from "../../hooks/useControlled";

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
   * RadioButtonGroup Value (Controlled). Use null for nothing selected but controlled.
   */
  value?: string | null;

  /**
   * RadioButtonGroup Default Value (Uncontrolled)
   */
  defaultValue?: string;

  /**
   * RadioButtonGroup Label
   */
  legendLabel?: string;

  /**
   * RadioButtonGroup Name
   */
  name: string;

  /**
   * RadioButtonGroup Disabled state
   */
  disabled?: boolean;

  /**
   * OnChange values
   */
  onChange?: (
    newValue: string | null,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
};

const RadioButtonGroup = ({
  id,
  legendLabel,
  disabled,
  className,
  children,

  defaultValue,
  value,
  name,
  onChange
}: RadioButtonGroupProps) => {
  const controlled = useControlled(value);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue ?? value ?? null
  );
  useEffect(() => {
    if (controlled) {
      setSelectedValue(value ?? null);
    }
  }, [value]);
  return (
    <fieldset
      id={id}
      className={cx("radiobutton--group", className)}
      name={name}
      disabled={disabled}
    >
      {legendLabel && (
        <legend className="radiobutton--group-legend formlabel">
          {legendLabel}
        </legend>
      )}
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<RadioButtonProps>(child)) {
          return child;
        }
        // eslint-disable-next-line no-console
        console.assert(
          child.props.checked === undefined &&
            child.props.defaultChecked === undefined,
          "You provided either checked or defaultChecked property to the RadioButton while it is a child of the RadioButtonGroup. That is illegal. While using a RadioButtonGroup you have to manage its value only on the group as those properties are being ignored on the child elements."
        );
        return React.cloneElement(child, {
          name,
          checked: selectedValue === child.props.value,
          disabled: disabled || child.props.disabled,
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
            if (event.target.checked && !controlled) {
              setSelectedValue(child.props.value);
            }
            child.props.onChange?.(event);
            onChange?.(child.props.value, event);
          }
        });
      })}
    </fieldset>
  );
};

export default RadioButtonGroup;
