import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import FloatingPanel from "./FloatingPanel";

export default {
  title: "Components/ComponentUtilities",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <FloatingPanel>Panel</FloatingPanel>
    </div>
  );
};
