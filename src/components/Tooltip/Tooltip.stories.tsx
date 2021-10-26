import React from "react";
import "tippy.js/dist/tippy.css";
import { withKnobs, select } from "@storybook/addon-knobs";
import { IconInfoCircle } from "@tabler/icons";
import { Button } from "../..";
import Tooltip from "./Tooltip";
import ContainerTooltip from "./ContainerTooltip";
import IconTrigger from "./IconTrigger";

export default { title: "Components/A_REFA_Tooltip", decorators: [withKnobs] };

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
        <Button>Don`t you dare clicking me.</Button>
      </ContainerTooltip>
    </div>
  );
};

export const IconAsTrigger = () => {
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
        <IconTrigger>
          <IconInfoCircle color="white" size={16} />
        </IconTrigger>
      </ContainerTooltip>
    </div>
  );
};
