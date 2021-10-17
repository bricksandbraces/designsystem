import React, { forwardRef } from "react";
import TextInput from "../TextInput/TextInput";

type NumberInputProps = {
  /**
   * NumberInput ClassName
   */
  className?: string;

  /**
   * NumberInput Label
   */
  label?: string;

  /**
   * NumberInput Placeholder
   */
  placeholder?: string;

  /**
   * NumberInput Id
   */
  id?: string;

  /**
   * NumberInput Error State & Text
   */
  error?: boolean;
  errorText?: string;

  /**
   * NumberInput Warning State & Text
   */
  warning?: boolean;
  warningText?: string;

  /**
   * NumberInput Size
   */
  size?: "default" | "small" | "large";

  /**
   * NumberInput AutoComplete
   */
  autoComplete?: "off" | "on";

  /**
   * NumberInput Default Value
   */
  defaultValue?: number;

  /**
   * NumberInput Value
   */
  value?: number;

  /**
   * NumberInput Fluid
   */
  fluid?: boolean;

  /**
   * NumberInput OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * NumberInput Children
   */
  children?: React.ReactNode;
};

const NumberInput = (
  { size = "default", ...rest }: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return <TextInput {...rest} ref={ref} size={size} type="number" />;
};

export default forwardRef<HTMLInputElement, NumberInputProps>(NumberInput);
