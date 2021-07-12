import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { IconLayoutGridAdd } from "@tabler/icons";
import Button from "./Button";

export default { title: "Button", decorators: [withKnobs] };

const options = {
  Primary: "primary",
  Outline: "outline",
  Danger: "danger",
  Ghost: "ghost"
};

const positioning = {
  Left: "left",
  Right: "right"
};

const defaultPosition = "left";

const defaultValue = "primary";

export const Default = () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <div style={{ width: "405px" }}>
      <Button
        kind={select("Kind", options, defaultValue)}
        label={text("Label", "Button")}
        large={boolean("large", false)}
        fluid={boolean("Fluid", false)}
        withIcon={boolean("with Icon", false)}
        iconPosition={select("Icon positioning", positioning, defaultPosition)}
        iconOnly={boolean("Icon only", false)}
        isLoading={boolean("is Loading?", false)}
        disabled={boolean("Disabled", false)}
      >
        <IconLayoutGridAdd />
        {text("Label", "Button")}
      </Button>
    </div>
  </div>
);
