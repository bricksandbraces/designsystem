import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Dropdown from "./Dropdown";

export default { title: "Components/Dropdown", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px", marginBottom: "2rem" }}>
        <Dropdown />
      </div>
    </div>
  );
};
