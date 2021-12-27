import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { FloatingPanel } from "./FloatingPanel";

export default {
  title: "Utilities/FloatingPanel",
  decorators: [withKnobs]
};

export const Panel = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <FloatingPanel>Panel</FloatingPanel>
    </div>
  );
};
