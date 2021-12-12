import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import LoginForm from "./LoginForm";
import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import { action } from "@storybook/addon-actions";

export default { title: "Web/LoginForm", decorators: [withKnobs] };

export const DefaultUncontrolled = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh"
    }}
  >
    <div style={{ width: "405px" }}>
      <LoginForm
        id="sample-login-form"
        invalidEmail={boolean("Invalid Email", false)}
        invalidPassword={boolean("Invalid password", false)}
        invalidEmailText={text(
          "Invalid Email Text",
          "This email is not valid."
        )}
        invalidPasswordText={text(
          "Invalid Password Text",
          "This password is not valid."
        )}
        emailPlaceholder={text("Email Placeholder", "Email")}
        passwordPlaceholder={text("Password Placeholder", "Password")}
        defaultEmailValue={text("Default Email Value", "max@mustermann.de")}
        defaultPasswordValue={text("Default Password Value", "12345678")}
        forgotPasswordLink={text("Forgot Password Link", "#")}
        forgotPasswordText={text("Forgot Password Text", "Forgot password?")}
        onEmailChange={action("onEmailChange")}
        onPasswordChange={action("onPasswordChange")}
      />
      <div style={{ paddingTop: "20px", display: "flex" }}>
        <Checkbox value="remember" label="Keep me signed in" id="checkbox" />
      </div>
      <div style={{ paddingTop: "32px" }}>
        <Button
          isLoading={boolean("is Loading?", false)}
          disabled={boolean("Disabled", false)}
          fluid
          size="large"
        >
          Login
        </Button>
      </div>
    </div>
  </div>
);
