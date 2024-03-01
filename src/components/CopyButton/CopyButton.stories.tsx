import { action } from "@storybook/addon-actions";
import React from "react";
import { CopyButton } from "./CopyButton";
import { CopyButtonSkeleton } from "./CopyButtonSkeleton";

export default {
  title: "Miscellaneous/CopyButton",
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          padding: "32px",
          color: "white"
        }}
      >
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"]
      }
    }
  },
  args: {
    size: "default",
    tooltipLabelCopied: "Copied!",
    tooltipLabel: "Copy",
    valueToCopy: "Lynxes are awesome!",
    onClick: action("onClick")
  }
};

export const Default = (args: any) => {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <span
        style={{ paddingRight: "24px", color: "var(--color-font-text-01)" }}
      >
        {args.valueToCopy}
      </span>
      <CopyButton {...args} />
    </span>
  );
};

export const Skeleton = (args: any) => {
  return <CopyButtonSkeleton size={args.size} />;
};
