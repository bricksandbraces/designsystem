import React, { forwardRef, useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons";
import TextInput from "../TextInput/TextInput";
import IconOnlyButton from "../Button/IconOnlyButton";
import { prefix } from "../../settings";

type PasswordInputProps = {
  /**
   * TextInput ClassName
   */
  className?: string;

  /**
   * Label
   */
  label?: string;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Id
   */
  id?: string;

  /**
   * Error state & text
   */
  error?: boolean;
  errorText?: string;

  /**
   * Warning state & text
   */
  warning?: boolean;
  warningText?: string;

  /**
   * Container size
   */
  size?: "default" | "small" | "large";

  /**
   * Autocomplete
   */
  autoComplete?: "off" | "on";

  /**
   * Default Value
   */
  defaultValue?: string;

  /**
   * Value
   */
  value?: string;

  /**
   * Fluid variant
   */
  fluid?: boolean;

  /**
   * OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * ReactChildren
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
        wrapperClassName={`${prefix}--textinput--togglepassword`}
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
