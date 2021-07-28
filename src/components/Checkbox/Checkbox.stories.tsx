import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Checkbox from "./Checkbox";

export default { title: "Checkbox", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Checkbox label={text("Label", "Checkbox label")} id="checkbox" />
        <Checkbox label={text("Label", "Checkbox label")} id="checkbox-2" />
      </div>
    </div>
  );
};
