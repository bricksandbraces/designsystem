import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import { IconEye, IconEyeOff } from "@tabler/icons";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

type PasswordInputProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  id?: string;
  type?: "password" | "text" | "email" | "number" | "search" | "time" | "url";
  size?: "default" | "small" | "large";

  autoComplete?: "off" | "on";

  defaultValue?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  children?: React.ReactNode;
};

const PasswordInput = ({ size, children, ...rest }: PasswordInputProps) => {
  const [passwordType, setPasswordType] = useState("password");
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
