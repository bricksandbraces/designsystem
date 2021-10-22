import React from "react";
import "tippy.js/dist/tippy.css";
import { withKnobs, select } from "@storybook/addon-knobs";
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
        title="You sneaky little thing."
        body={
          <>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </>
        }
      >
        <Button>Don`t you dare hovering me.</Button>
      </ContainerTooltip>
    </div>
  );
};
