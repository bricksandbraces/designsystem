import React, { useEffect, useState } from "react";
import cx from "classnames";

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
  const [email, setEmail] = useState(value?.email ?? defaultValue?.email ?? "");
  const [password, setPassword] = useState(
    value?.password ?? defaultValue?.password ?? ""
  );

  useEffect(() => {
    setEmail(value?.email ?? "");
    setPassword(value?.password ?? "");
  }, [value]);

  return (
    <div className="form fluid">
      <div
        className={cx("form-floating fluid", { "form-invalid": invalidEmail })}
      >
        <input
          type="email"
          className={cx("form-control fluid", { "form-invalid": invalidEmail })}
          id="loginEmail"
          placeholder="name@example.com"
          value={email}
          onChange={(event) => {
            // if uncontrolled
            if (!value) {
              setEmail(event.target.value);
            }
            onChange?.({ email: event.target.value, password }, event);
          }}
          autoComplete="off"
        />
        <label htmlFor="loginEmail" className="form-label">
          E-Mail-Adresse
        </label>
      </div>
      <div
        className={cx("form-floating fluid", {
          "form-invalid": invalidPassword
        })}
      >
        <input
          type="password"
          className={cx("form-control fluid", {
            "form-invalid": invalidPassword
          })}
          id="loginPassword"
          placeholder="Passwort"
          value={password}
          onChange={(event) => {
            // if uncontrolled
            if (!value) {
              setPassword(event.target.value);
            }
            onChange?.({ email, password: event.target.value }, event);
          }}
          autoComplete="off"
        />
        <label htmlFor="loginPassword" className="form-label">
          Passwort
        </label>
        <a href="#" target="_blank" className="form-link">
          Passwort vergessen?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
