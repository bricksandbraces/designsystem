import { IconEye, IconEyeOff } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useControlled } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { IconOnlyButton } from "../Button/IconOnlyButton";
import { TextInput, TextInputProps } from "../TextInput/TextInput";

export type PasswordInputProps = {
  /**
   * PasswordInput Controlled Visible
   */
  visible?: boolean;

  /**
   * PasswordInput DefaultVisible
   */
  defaultVisible?: boolean;

  /**
   * PasswordInput Light
   */
  light?: boolean;

  /**
   * PasswordInput onVisibilityChange
   */
  onVisibilityChange?: (
    event:
      | React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      | React.KeyboardEvent<HTMLButtonElement>,
    newVisibility: boolean
  ) => void;

  /**
   * PasswordInput HidePasswordLabel
   */
  hidePasswordLabel?: string;

  /**
   * PasswordInput ShowPasswordLabel
   */
  showPasswordLabel?: string;
} & Omit<TextInputProps, "type">;

export const PasswordInput = React.forwardRef(function PasswordInput(
  {
    visible,
    defaultVisible,
    onVisibilityChange,
    size,
    children,
    hidePasswordLabel = "Hide password",
    showPasswordLabel = "Show password",
    ...rest
  }: PasswordInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const controlled = useControlled(visible);
  const [passwordVisible, setPasswordVisibility] = useState<boolean>(
    (controlled ? visible : defaultVisible) ?? false
  );

  useEffect(() => {
    if (controlled) {
      setPasswordVisibility(visible ?? false);
    }
  }, [visible]);

  return (
    <TextInput
      {...rest}
      ref={ref}
      size={size}
      type={passwordVisible ? "text" : "password"}
    >
      <IconOnlyButton
        aria-controls="password"
        aria-expanded={passwordVisible}
        tooltipProps={{
          tooltipContent: passwordVisible
            ? hidePasswordLabel
            : showPasswordLabel
        }}
        size={size}
        className={`${prefix}--textinput-togglepassword`}
        type="button"
        kind="ghost"
        onClick={(event) => {
          if (!controlled) {
            setPasswordVisibility(!passwordVisible);
          }
          onVisibilityChange?.(
            event as React.MouseEvent<HTMLButtonElement>,
            !passwordVisible
          );
        }}
        icon={passwordVisible ? <IconEyeOff /> : <IconEye />}
      />
      {children}
    </TextInput>
  );
});
