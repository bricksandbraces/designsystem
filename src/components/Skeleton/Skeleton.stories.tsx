import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Skeleton from "./Skeleton";

export default { title: "Components/Skeleton", decorators: [withKnobs] };

const sizeOptions = {
  Small: "small",
  Default: "default",
  Large: "large"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Skeleton
        size={select("Size", sizeOptions, defaultSize) as any}
        circle={boolean("Circle", false)}
      />
    </div>
  );
};
