import { text, select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import ToolTip from "./ToolTip";

export default { title: "ToolTip", decorators: [withKnobs] };

const positioning = {
  Left: "left",
  Right: "right",
  Top: "top",
  Bottom: "bottom"
};

const defaultPosition = "top";

export const Default = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ToolTip
        position={
          select("Tooltip position", positioning, defaultPosition) as any
        }
        label={text("Tooltip label", "This is a tooltip")}
      >
        Hover me
      </ToolTip>
    </div>
  );
};
