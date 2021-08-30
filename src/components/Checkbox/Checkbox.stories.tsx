import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Checkbox from "./Checkbox";

export default { title: "Components/Checkbox", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Checkbox label={text("Label", "Checkbox label")} id="checkbox" />
        <Checkbox
          label={text("Label", "Checkbox label")}
          id="checkbox-2"
          disabled={boolean("Checkbox 2 disabled", false)}
        />
      </div>
    </div>
  );
};
