import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { prefix } from "../../settings";
import { AspectRatio } from "./AspectRatio";

export default {
  component: AspectRatio,
  title: "Layout/AspectRatio",
  decorators: [
    (Story: any) => (
      <div style={{ margin: "32px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    ratio: {
      control: {
        type: "select",
        options: ["1x1", "2x1", "4x3", "16x9", "21x9"]
      }
    }
  },
  args: {
    ratio: "1x1"
  }
} as Meta;

export const Default: StoryObj<typeof AspectRatio> = {
  render: (args: any) => {
    return (
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh"
        }}
      >
        <div style={{ width: "256px" }}>
          <AspectRatio {...args}>
            <div className={`${prefix}--grid-example`}>Content</div>
          </AspectRatio>
        </div>
      </div>
    );
  }
};
