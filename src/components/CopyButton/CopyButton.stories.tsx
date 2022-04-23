import { action } from "@storybook/addon-actions";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { CopyButton } from "./CopyButton";
import { CopyButtonSkeleton } from "./CopyButtonSkeleton";

export default {
  title: "Miscellaneous/CopyButton",
  decorators: [withKnobs]
};

const sizeOptions = {
  Large: "large",
  Small: "small",
  Default: "default"
};

const defaultSize = "default";

export const Default = () => {
  const valueToCopy = "Lynxes are awesome";
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "32px",
        color: "white"
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{ paddingRight: "24px", color: "var(--color-font-text-01)" }}
        >
          {valueToCopy}
        </span>
        <CopyButton
          tooltipLabelCopied={text("tooltipLabelCopied", "Copied!")}
          tooltipLabel={text("tooltipLabel", "Copy")}
          valueToCopy={valueToCopy}
          size={select("size", sizeOptions, defaultSize) as any}
          onClick={action("onClick")}
        />
      </span>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "32px"
      }}
    >
      <CopyButtonSkeleton
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
