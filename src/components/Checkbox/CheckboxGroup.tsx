import React, { useEffect, useState } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { assert } from "@openbricksandbraces/eloguent";
import { mapReactChildren } from "../../helpers/reactUtilities";
import { useControlled } from "../../hooks/useControlled";
import { RadioTileProps } from "../RadioTile/RadioTile";

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
   * CheckboxGroup Value (Controlled).
   */
  value?: string[];

  /**
   * CheckboxGroup Default Value (Uncontrolled)
   */
  defaultValue?: string[];

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
    newValue: string[],
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const CheckboxGroup = (
  {
    id,
    legendLabel,
    value,
    defaultValue,
    onChange,
    disabled,
    className,
    children,
    orientation = "vertical",
    name
  }: CheckboxGroupProps,
  ref: React.ForwardedRef<HTMLFieldSetElement>
) => {
  const controlled = useControlled(value);
  const [selectedValue, setSelectedValue] = useState<string[]>(
    defaultValue ?? value ?? []
  );
  useEffect(() => {
    if (controlled) {
      setSelectedValue(value ?? []);
    }
  }, [value]);
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
      {mapReactChildren<RadioTileProps>(children, ({ props, child }) => {
        assert(
          props.checked === undefined && props.defaultChecked === undefined,
          `You provided either checked or defaultChecked property to the RadioTile
           while it is a child of the RadioTileGroup. That is illegal. While using 
           a RadioTileGroup you have to manage its value only on the group as those 
           properties are being ignored on the child elements.`
        );
        return React.cloneElement(child, {
          name,
          checked: selectedValue.includes(props.value),
          disabled: disabled || props.disabled,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = !selectedValue.includes(props.value)
              ? [...selectedValue, props.value]
              : selectedValue.filter((val) => val !== props.value);

            if (!controlled) {
              setSelectedValue(newValue);
            }

            props.onChange?.(event);
            onChange?.(newValue, event);
          }
        });
      })}
    </fieldset>
  );
};

export default React.forwardRef(CheckboxGroup);
