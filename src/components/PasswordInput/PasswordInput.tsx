import React, { forwardRef, useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons";
import TextInput from "../TextInput/TextInput";
import IconOnlyButton from "../Button/IconOnlyButton";
import { prefix } from "../../settings";

type PasswordInputProps = {
  /**
   * PasswordInput ClassName
   */
  className?: string;

  /**
   * PasswordInput Label
   */
  label?: string;

  /**
   * PasswordInput Placeholder
   */
  placeholder?: string;

  /**
   * PasswordInput Id
   */
  id?: string;

  /**
   * PasswordInput Error State & Text
   */
  error?: boolean;
  errorText?: string;

  /**
   * PasswordInput Warning State & Text
   */
  warning?: boolean;
  warningText?: string;

  /**
   * PasswordInput Size
   */
  size?: "default" | "small" | "large";

  /**
   * PasswordInput AutoComplete
   */
  autoComplete?: "off" | "on";

  /**
   * PasswordInput Default Value
   */
  defaultValue?: string;

  /**
   * PasswordInput Value
   */
  value?: string;

  /**
   * PasswordInput Fluid
   */
  fluid?: boolean;

  /**
   * PasswordInput OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * PasswordInput Children
   */
  children?: React.ReactNode;
};

const PasswordInput = (
  { size, children, ...rest }: PasswordInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  return (
    <TextInput {...rest} ref={ref} size={size} type={passwordType}>
      <IconOnlyButton
        aria-controls="password"
        aria-expanded={passwordType !== "password"}
        tooltipLabel={
          passwordType === "password" ? "Show password" : "Hide password"
        }
        size={size}
        className={`${prefix}--textinput-togglepassword`}
        type="button"
        kind="ghost"
        onClick={() => {
          if (passwordType === "password") {
            setPasswordType("text");
          } else {
            setPasswordType("password");
          }
        }}
        icon={passwordType === "password" ? <IconEye /> : <IconEyeOff />}
      />
      {children}
    </TextInput>
  );
};

export default forwardRef<HTMLInputElement, PasswordInputProps>(PasswordInput);
