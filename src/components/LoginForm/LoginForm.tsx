import React, { useEffect, useState } from "react";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import Link from "../Link/Link";
import useControlled from "../../hooks/useControlled";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

type LoginFormData = {
  email?: string;
  password?: string;
};

type LoginFormProps = {
  /**
   * Uses the form in an uncontrolled manner. Adding an optional default value lets the form initially
   * render with this default value. The default value however cannot be changed after the first render completed.
   */
  defaultValue?: LoginFormData;

  /**
   * Uses the form in a controlled manner. Adding the optional value lets the form always use this value.
   * Any change requests have to be handeled in onChange event then.
   */
  value?: LoginFormData;

  /**
   * onChange event of any inputs within the form. Notifies about change in uncontrolled mode,
   * requests the change of the values in controlled mode.
   */
  onChange?: (formData: LoginFormData, event?: any) => void;

  /**
   * Tells the component to show the email adress as invalid.
   */
  invalidEmail?: boolean;

  /**
   * Tells the component to show the email adress as invalid.
   */
  invalidPassword?: boolean;
};

const LoginForm = ({
  defaultValue,
  value,
  invalidPassword,
  invalidEmail,
  onChange
}: LoginFormProps) => {
  const controlled = useControlled(value);

  const [email, setEmail] = useState(value?.email ?? defaultValue?.email ?? "");
  const [password, setPassword] = useState(
    value?.password ?? defaultValue?.password ?? ""
  );

  useEffect(() => {
    if (controlled) {
      setEmail(value?.email ?? "");
      setPassword(value?.password ?? "");
    }
  }, [value]);

  return (
    <>
      <TextInput
        className={`${prefix}--loginform--email`}
        fluid
        type="email"
        error={invalidEmail}
        id="loginEmail"
        placeholder="name@example.com"
        value={email}
        onChange={(event) => {
          if (!controlled) {
            setEmail(event.target.value);
          }
          onChange?.({ email: event.target.value, password }, event);
        }}
        autoComplete="off"
      />
      <PasswordInput
        className={`${prefix}--loginform--password`}
        error={invalidPassword}
        fluid
        id="loginPassword"
        placeholder="Passwort"
        value={password}
        onChange={(event) => {
          if (!controlled) {
            setPassword(event.target.value);
          }
          onChange?.({ email, password: event.target.value }, event);
        }}
        autoComplete="off"
      >
        <Label className={`${prefix}--loginform--password-link`}>
          <Link href="#" inheritSize>
            Password vergessen?
          </Link>
        </Label>
      </PasswordInput>
    </>
  );
};

export default LoginForm;
