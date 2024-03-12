import "tippy.js/dist/tippy.css";
import { IconInfoCircle } from "@tabler/icons-react";
import React from "react";
import { Button, ContainerTooltip, IconTrigger, Tooltip } from "../..";

export default {
  title: "Utilities/Tooltip",
  decorators: [
    (Story: any) => (
      <div style={{ padding: "32px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["light", "dark"]
      }
    }
  },
  args: {
    theme: "light"
  }
};

export const Default = {
  render: (args: any) => {
    return (
      <Tooltip {...args} tooltipContent="You sneaky little thing.">
        <Button>Don`t you dare hovering me.</Button>
      </Tooltip>
    );
  }
};

export const Container = {
  render: (args: any) => {
    return (
      <ContainerTooltip
        {...args}
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
    );
  }
};

export const IconAsTrigger = {
  render: (args: any) => {
    return (
      <ContainerTooltip
        {...args}
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
          <IconInfoCircle
            style={{ color: "var(--color-font-text-01)" }}
            size={16}
          />
        </IconTrigger>
      </ContainerTooltip>
    );
  }
};
