import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CopyButton from "./CopyButton";

export default { title: "Components/CopyButton", decorators: [withKnobs] };

export const Default = () => {
  const valueToCopy = "Lynxes are awesome";
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <span style={{ display: "flex", alignItems: "center" }}>
        <span style={{ paddingRight: "24px" }}>{valueToCopy}</span>
        <CopyButton
          labelCopied={text("Tooltip Label", "Copied!")}
          label={text("Button Label", "Copy")}
          valueToCopy={valueToCopy}
        />
      </span>
    </div>
  );
};
