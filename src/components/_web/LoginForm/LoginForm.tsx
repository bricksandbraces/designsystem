import React from "react";
import TextInput from "../../TextInput/TextInput";
import PasswordInput from "../../PasswordInput/PasswordInput";
import { prefix } from "../../../settings";
import { useControlledInput } from "../../../hooks/useControlled";

export type LoginFormProps = {
  /**
   * LoginForm ID
   */
  id: string;

  /**
   * LoginForm ClassName
   */
  className?: string;

  /**
   * LoginForm Default Email Value
   */
  defaultEmailValue?: string;

  /**
   * LoginForm Email Value
   */
  emailValue?: string;

  /**
   * LoginForm Email Placeholder
   */
  emailPlaceholder?: string;

  /**
   * LoginForm Default Password Value
   */
  defaultPasswordValue?: string;

  /**
   * LoginForm Password Value
   */
  passwordValue?: string;

  /**
   * LoginForm Password Placeholder
   */
  passwordPlaceholder?: string;

  /**
   * LoginForm the component to show the email adress as invalid.
   */
  invalidEmail?: boolean;

  /**
   * LoginForm InvalidPassword Defines the text to show when the email is invalid.
   */
  invalidEmailText?: string;

  /**
   * LoginForm InvalidPassword Tells the component to show the password as invalid.
   */
  invalidPassword?: boolean;

  /**
   * LoginForm InvalidPassword Defines the text to show when the password is invalid.
   */
  invalidPasswordText?: string;

  /**
   * LoginForm OnEmailChange
   */
  onEmailChange?: (
    newValue: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * LoginForm OnPasswordChange
   */
  onPasswordChange?: (
    newValue: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const LoginForm = (
  {
    id,
    className,
    defaultEmailValue,
    emailValue,
    emailPlaceholder,
    defaultPasswordValue,
    passwordValue,
    passwordPlaceholder,
    invalidPassword,
    invalidEmail,
    onEmailChange,
    onPasswordChange
  }: LoginFormProps,
  ref: React.ForwardedRef<HTMLFormElement>
) => {
  const [, , handleEmailOnChange] = useControlledInput(
    emailValue,
    defaultEmailValue,
    onEmailChange &&
      ((newValue, event) => {
        onEmailChange(
          newValue ?? "",
          event as React.ChangeEvent<HTMLInputElement>
        );
      })
  );

  const [, , handlePasswordOnChange] = useControlledInput(
    passwordValue,
    defaultPasswordValue,
    onPasswordChange &&
      ((newValue, event) => {
        onPasswordChange(
          newValue ?? "",
          event as React.ChangeEvent<HTMLInputElement>
        );
      })
  );

  return (
    <form className={className} ref={ref}>
      <TextInput
        className={`${prefix}--loginform-email`}
        fluid
        type="email"
        error={invalidEmail}
        id={id + "-email"}
        placeholder={emailPlaceholder}
        defaultValue={defaultEmailValue}
        value={emailValue}
        onChange={handleEmailOnChange()}
        autoComplete="off"
      />
      <PasswordInput
        className={`${prefix}--loginform-password`}
        error={invalidPassword}
        fluid
        id={id + "-password"}
        placeholder={passwordPlaceholder}
        value={passwordValue}
        defaultValue={defaultPasswordValue}
        onChange={handlePasswordOnChange()}
        autoComplete="off"
      ></PasswordInput>
    </form>
  );
};

export default React.forwardRef(LoginForm);
