import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { IconLayoutGridAdd } from "@tabler/icons";
import CopyButton from "./CopyButton";

export default { title: "CopyButton", decorators: [withKnobs] };

const positioning = {
  Left: "left",
  Right: "right",
  Top: "top",
  Bottom: "bottom"
};

const defaultPosition = "top";

export const Default = () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <CopyButton
      toolTipLabel={text("Label", "Copied!")}
      position={select("Positioning", positioning, defaultPosition)}
    >
      <IconLayoutGridAdd />
    </CopyButton>
  </div>
);
