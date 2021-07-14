import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CopyButton from "./CopyButton";

export default { title: "CopyButton", decorators: [withKnobs] };

const positioning = {
  Left: "left",
  Right: "right",
  Top: "top",
  Bottom: "bottom"
};

const defaultPosition = "top";

export const Default = () => {
  const valueToCopy = "Lynxes are awesome";
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <span style={{ display: "flex", alignItems: "center" }}>
        <span style={{ paddingRight: "24px" }}>{valueToCopy}</span>
        <CopyButton
          tooltipLabel={text("Label", "Copied!")}
          tooltipPosition={
            select("Positioning", positioning, defaultPosition) as any
          }
          valueToCopy={valueToCopy}
        />
      </span>
    </div>
  );
};
