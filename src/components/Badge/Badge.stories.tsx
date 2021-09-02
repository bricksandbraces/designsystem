import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Badge from "./Badge";

export default { title: "Components/Badge", decorators: [withKnobs] };

const typeOptions = {
  Blue: "blue",
  Yellow: "yellow",
  Red: "red",
  Green: "green",
  Orange: "orange",
  WarmGray: "warm-gray",
  ColdGray: "cold-gray",
  Purple: "purple",
  Cyan: "cyan"
};

const defaultType = "warm-gray";

export const Default = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Badge
        title="Button"
        colorType={select("Color (type)", typeOptions, defaultType) as any}
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
        colorType={select("Color (type)", typeOptions, defaultType) as any}
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
        colorType={select("Color (type)", typeOptions, defaultType) as any}
      >
        Badge
      </Badge>
    </div>
  );
};
