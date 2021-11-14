import { action, actions } from "@storybook/addon-actions";
import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Badge from "./Badge";
import BadgeSkeleton from "./BadgeSkeleton";

export default { title: "Components/A_REFA_Badge", decorators: [withKnobs] };

const colorOptions = {
  Blue: "blue",
  Yellow: "yellow",
  Red: "red",
  Green: "green",
  Orange: "orange",
  "Warm Gray": "warm-gray",
  "Cold Gray": "cold-gray",
  Purple: "purple",
  Cyan: "cyan"
};

const defaultType = "cold-gray";

const badgeActions = actions("onFocus", "onBlur", "onMouseOver", "onMouseExit");

export const Default = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Badge
        title="Button"
        colorType={select("type", colorOptions, defaultType) as any}
        {...badgeActions}
      >
        Badge
      </Badge>
    </div>
  );
};

export const WithClose = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Badge
        title="Button"
        onClose={() => {}}
        colorType={select("type", colorOptions, defaultType) as any}
        {...badgeActions}
      >
        Badge
      </Badge>
    </div>
  );
};

export const Interactive = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Badge
        title="Button"
        onClick={action("onClick")}
        colorType={select("type", colorOptions, defaultType) as any}
        {...badgeActions}
      >
        Badge
      </Badge>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "8px" }}>
      <BadgeSkeleton />
      <BadgeSkeleton />
      <BadgeSkeleton />
    </div>
  );
};
