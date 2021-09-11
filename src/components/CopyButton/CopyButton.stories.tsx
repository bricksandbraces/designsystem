import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CopyButton from "./CopyButton";

export default { title: "Components/CopyButton", decorators: [withKnobs] };

const positioning = {
  Left: "left",
  Right: "right",
  Top: "top",
  Bottom: "bottom"
};

const defaultPosition = "bottom";

export const Default = () => {
  const valueToCopy = "Lynxes are awesome";
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <span style={{ display: "flex", alignItems: "center" }}>
        <span style={{ paddingRight: "24px" }}>{valueToCopy}</span>
        <CopyButton
          tooltipLabel={text("Tooltip Label", "Copied!")}
          label={text("Button Label", "Copy")}
          tooltipPosition={
            select("Positioning", positioning, defaultPosition) as any
          }
          valueToCopy={valueToCopy}
        />
      </span>
    </div>
  );
};
