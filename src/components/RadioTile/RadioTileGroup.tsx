import { assert } from "@openbricksandbraces/eloguent";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import { mapReactChildren } from "../../helpers/reactUtilities";
import { useControlled } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { RadioTileProps } from "./RadioTile";

export type RadioTileGroupProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * RadioTileGroup ID
   */
  id?: string;

  /**
   * Children
   */
  children?: React.ReactNode;

  /**
   * RadioTileGroup Value (Controlled). Use null for nothing selected but controlled.
   */
  value?: string | null;

  /**
   * RadioTileGroup Default Value (Uncontrolled)
   */
  defaultValue?: string;

  /**
   * RadioTileGroup Label
   */
  legendLabel?: string;

  /**
   * RadioTileGroup Name
   */
  name: string;

  /**
   * RadioTileGroup Disabled state
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

export const RadioTileGroup = React.forwardRef(function RadioTileGroup(
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
  }: RadioTileGroupProps,
  ref: React.ForwardedRef<HTMLFieldSetElement>
) {
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
      className={cx(`${prefix}--radiotile-group`, className)}
      name={name}
      disabled={disabled}
      ref={ref}
    >
      {legendLabel && (
        <legend
          className={`${prefix}--radiotile-group__legend ${prefix}--typography-label`}
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
          checked: selectedValue === props.value,
          disabled: disabled || props.disabled,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.checked && !controlled) {
              setSelectedValue(props.value);
            }
            props.onChange?.(event);
            onChange?.(props.value, event);
          }
        });
      })}
    </fieldset>
  );
});
