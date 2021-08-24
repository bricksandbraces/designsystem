import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Dropdown from "./Dropdown";

export default { title: "Components/Dropdown", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Dropdown
          label={text("Label", "Checkbox label")}
          size={select("Size", sizeOptions, defaultSize) as any}
          id="checkbox"
        />
      </div>
    </div>
  );
};
