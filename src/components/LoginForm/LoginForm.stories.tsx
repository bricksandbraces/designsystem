import { boolean, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { IconArrowRight } from "@tabler/icons";
import LoginForm from "./LoginForm";
import Button from "../Button/Button";

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
      <div style={{ paddingTop: "36px" }}>
        <Button
          isLoading={boolean("is Loading?", false)}
          disabled={boolean("Disabled", false)}
          fluid
          large
          kind="outline"
          withIconRight
          renderIcon={<IconArrowRight />}
        >
          Login
        </Button>
      </div>
    </div>
  </div>
);
