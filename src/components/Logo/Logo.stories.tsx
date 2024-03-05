import React from "react";
import { Logo } from "./Logo";

export default {
  component: Logo,
  title: "Utilities/Logo",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["black", "white"]
      }
    },
    size: {
      control: {
        type: "select",
        options: ["xsmall", "small", "medium", "large", "xlarge"]
      }
    },
    type: {
      control: {
        type: "select",
        options: ["logomark", "logotype"]
      }
    }
  },
  args: {
    color: "white",
    size: "medium",
    type: "logotype"
  }
};

export const Default = {};
