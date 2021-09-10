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

const iconOptions = {
  NoIcon: "",
  IconOnly: "only",
  Right: "right",
  Left: "left"
};

const defaultIcon = "";

export const Default = () => (
  <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
    <div style={{ width: "405px" }}>
      <Button
        kind={select("Kind", options, defaultValue) as any}
        size={select("Size", sizeOptions, defaultSize) as any}
        icon={select("Icon", iconOptions, defaultIcon) as any}
        showTooltip={boolean("show Tooltip", false)}
        tooltipLabel={text("Tooltip Label", "Label")}
        fluid={boolean("Fluid", false)}
        renderIcon={<IconLayoutGridAdd />}
        isLoading={boolean("is Loading?", false)}
        disabled={boolean("Disabled", false)}
      >
        {text("Label", "Button")}
      </Button>
    </div>
  </div>
);
