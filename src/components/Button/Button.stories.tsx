import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { IconLayoutGridAdd } from "@tabler/icons";
import Button from "./Button";

export default { title: "Components/Button", decorators: [withKnobs] };

const options = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Danger: "danger",
  Ghost: "ghost"
};

const defaultValue = "primary";

const sizeOptions = {
  Large: "large",
  Small: "small",
  Default: "default"
};

const defaultSize = "default";

export const Default = () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <div style={{ width: "405px" }}>
      <Button
        kind={select("Kind", options, defaultValue)}
        renderIcon={<IconLayoutGridAdd />}
        size={select("Size", sizeOptions, defaultSize) as any}
        fluid={boolean("Fluid", false)}
        withIconRight={boolean("with Icon right", false)}
        withIconLeft={boolean("with Icon left", false)}
        iconOnly={boolean("Icon only", false)}
        isLoading={boolean("is Loading?", false)}
        disabled={boolean("Disabled", false)}
      >
        {text("Label", "Button")}
      </Button>
    </div>
  </div>
);
