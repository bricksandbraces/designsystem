import { withKnobs } from "@storybook/addon-knobs";
import { IconListSearch, IconSearch } from "@tabler/icons";
import React from "react";
import { Button } from "../..";
import EmptyState from "./EmptyState";

export default {
  title: "Components/EmptyState",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <EmptyState
        icon={<IconListSearch />}
        title="No search items found"
        subTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
      />
    </div>
  );
};

export const WithButton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <EmptyState
        icon={<IconListSearch />}
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

export const Horizontal = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <EmptyState
        orientation="horizontal"
        icon={<IconListSearch />}
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
