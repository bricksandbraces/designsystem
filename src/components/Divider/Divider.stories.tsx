import React from "react";
import { Divider } from "./Divider";

export default {
  component: Divider,
  title: "Layout/Divider",
  decorators: [
    (Story: any) => (
      <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["subtle", "default", "harsh"]
      }
    }
  },
  args: {
    type: "default"
  }
};

export const Default = (args: any) => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Divider {...args} />
      </div>
    </div>
  );
};
