import { boolean, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import LoginForm from "./LoginForm";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Link from "../Link/Link";

export default { title: "Web/LoginForm", decorators: [withKnobs] };

export const Default = () => (
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
        invalidEmail={boolean("Invalid Email", false)}
        invalidPassword={boolean("Invalid password", false)}
      />
      <div style={{ paddingTop: "20px", display: "flex" }}>
        <div style={{ marginRight: "16px" }}>
          <Checkbox label="Keep me signed in" id="checkbox" />
        </div>
        <Link href="#">Password vergessen?</Link>
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
