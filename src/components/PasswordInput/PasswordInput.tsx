import React, { forwardRef, useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

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
   * Input Type
   */
  type?: "password" | "text" | "email" | "number" | "search" | "time" | "url";

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
   * OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * ReactChildren
   */
  children?: React.ReactNode;
};

const PasswordInput = ({ size, children, ...rest }: PasswordInputProps) => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  return (
    <TextInput {...rest} size={size} type={passwordType}>
      <Button
        aria-controls="password"
        aria-expanded={passwordType !== "password"}
        title={passwordType === "password" ? "Show password" : "Hide password"}
        size={size}
        className="textinput--togglepassword"
        type="button"
        kind="ghost"
        iconOnly
        onClick={() => {
          if (passwordType === "password") {
            setPasswordType("text");
          } else {
            setPasswordType("password");
          }
        }}
        renderIcon={passwordType === "password" ? <IconEye /> : <IconEyeOff />}
      />
      {children}
    </TextInput>
  );
};

export default forwardRef<HTMLInputElement, PasswordInputProps>(PasswordInput);
