import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AccordionSkeleton } from "./AccordionSkeleton";

export default {
  component: AccordionSkeleton,
  title: "Miscellaneous/Accordion",
  decorators: [
    (Story: any) => (
      <div style={{ margin: "32px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "default", "small"]
      }
    }
  },
  args: {
    size: "default"
  }
} as Meta;

export const Skeleton: StoryObj<typeof AccordionSkeleton> = {};
