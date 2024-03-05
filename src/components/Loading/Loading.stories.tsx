import React from "react";
import { Loading } from "./Loading";

export default {
  component: Loading,
  title: "Utilities/Loading",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: {
          Inline: "inline",
          Small: "small",
          Default: "default",
          Large: "large"
        }
      }
    }
  },
  args: {
    active: true,
    withOverlay: false,
    loadingDescription: "Loading spinner",
    size: "default"
  },
  decorator: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <Story />
      </div>
    )
  ]
};

export const Default = {};
