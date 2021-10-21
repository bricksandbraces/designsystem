import React from "react";
import "tippy.js/dist/tippy.css";
import { withKnobs, select } from "@storybook/addon-knobs";
import { IconOutlet } from "@tabler/icons";
import { Button } from "../..";
import Tooltip from "./Tooltip";
import ContainerTooltip from "./ContainerTooltip";

export default { title: "Components/Tooltip", decorators: [withKnobs] };

const themeOptions = {
  light: "light",
  dark: "dark"
};

const defaultTheme = "light";

export const Default = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Tooltip
        theme={select("theme", themeOptions, defaultTheme) as any}
        tooltipContent="You sneaky little thing."
      >
        <Button>Don`t you dare hovering me.</Button>
      </Tooltip>
    </div>
  );
};

export const Container = () => {
  return (
    <div style={{ padding: "32px" }}>
      <ContainerTooltip
        theme={select("theme", themeOptions, defaultTheme) as any}
        tooltipContent="You sneaky little thing."
      >
        <IconOutlet color="white" size={16} />
      </ContainerTooltip>
    </div>
  );
};
