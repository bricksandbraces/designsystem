import { withKnobs } from "@storybook/addon-knobs";
import { IconSearch } from "@tabler/icons";
import React from "react";
import { Button } from "../..";
import EmptyState from "./EmptyState";

export default {
  title: "Components/EmptyState",
  decorators: [withKnobs]
};

export const Vertical = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <EmptyState
        icon={<IconSearch />}
        title="No search items found"
        subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
      />
    </div>
  );
};

export const Horizontal = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <EmptyState
        orientation="horizontal"
        icon={<IconSearch />}
        title="No search items found"
        subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
      />
    </div>
  );
};

export const VerticalWithButton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <EmptyState
        icon={<IconSearch />}
        title="No search items found"
        subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        actions={
          <>
            <Button>Empty Search</Button>
          </>
        }
      ></EmptyState>
    </div>
  );
};

export const HorizontallWithButton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <EmptyState
        orientation="horizontal"
        icon={<IconSearch />}
        title="No search items found"
        subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
        actions={
          <>
            <Button>Empty Search</Button>
          </>
        }
      ></EmptyState>
    </div>
  );
};
