import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { Button } from "../..";
import { EmptyState } from "./EmptyState";

export default {
  component: EmptyState,
  title: "Pattern/EmptyState",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <Story />
      </div>
    )
  ],
  args: {
    title: "No search items found",
    subTitle:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
  }
};

export const Vertical = { args: { icon: <IconSearch /> } };

export const Horizontal = {
  args: { orientation: "horizontal", icon: <IconSearch /> }
};

export const VerticalWithButton = {
  args: { icon: <IconSearch />, actions: <Button>Empty Search</Button> }
};

export const HorizontallWithButton = {
  args: {
    orientation: "horizontal",
    icon: <IconSearch />,
    actions: <Button>Empty Search</Button>
  }
};
