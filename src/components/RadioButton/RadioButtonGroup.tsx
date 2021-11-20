import React, { useEffect, useState } from "react";
import cx from "classnames";
import { assert } from "@openbricksandbraces/eloguent";
import { RadioButtonProps } from "./RadioButton";
import { useControlled } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { mapReactChildren } from "../../helpers/reactUtilities";

export type RadioButtonGroupProps = {
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
  children?: React.ReactNode;

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
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const RadioButtonGroup = (
  {
    id,
    legendLabel,
    disabled,
    className,
    children,

    defaultValue,
    value,
    name,
    onChange
  }: RadioButtonGroupProps,
  ref: React.ForwardedRef<HTMLFieldSetElement>
) => {
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
      className={cx(`${prefix}--radiobutton-group`, className)}
      name={name}
      disabled={disabled}
      ref={ref}
    >
      {legendLabel && (
        <legend
          className={`${prefix}--radiobutton-group__legend ${prefix}--typography-label`}
        >
          {legendLabel}
        </legend>
      )}
      {mapReactChildren<RadioButtonProps>(children, ({ props, child }) => {
        assert(
          props.checked === undefined && props.defaultChecked === undefined,
          `You provided either checked or defaultChecked property to the RadioButton while it is a
          child of the RadioButtonGroup. That is illegal. While using a RadioButtonGroup you have
          to manage its value only on the group as those properties are being ignored on the child
          elements.`
        );
        return React.cloneElement(child, {
          name,
          checked: selectedValue === props.value,
          disabled: disabled || props.disabled,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.checked && !controlled) {
              setSelectedValue(child.props.value);
            }
            props.onChange?.(event);
            onChange?.(props.value, event);
          }
        });
      })}
      )
    </fieldset>
  );
};

export default React.forwardRef(RadioButtonGroup);
