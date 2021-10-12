import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Badge from "./Badge";
import BadgeSkeleton from "./BadgeSkeleton";

export default { title: "Components/Badge", decorators: [withKnobs] };

const typeOptions = {
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

export const Default = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Badge
        title="Button"
        colorType={select("type", typeOptions, defaultType) as any}
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
        colorType={select("type", typeOptions, defaultType) as any}
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
        onClick={() => {}}
        colorType={select("type", typeOptions, defaultType) as any}
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
