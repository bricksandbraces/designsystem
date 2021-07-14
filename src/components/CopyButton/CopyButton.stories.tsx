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

export const Default = () => {
  const valueToCopy = "Lynxes are awesome";
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <span>
        {valueToCopy}
        <CopyButton
          tooltipLabel={text("Label", "Copied!")}
          tooltipPosition={
            select("Positioning", positioning, defaultPosition) as any
          }
          valueToCopy={valueToCopy}
        >
          <IconLayoutGridAdd />
        </CopyButton>
      </span>
    </div>
  );
};
