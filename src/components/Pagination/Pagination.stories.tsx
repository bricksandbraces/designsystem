import React from "react";
import { Pagination } from "./Pagination";

export default {
  component: Pagination,
  title: "Navigation/Pagination",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <div style={{ width: "405px" }}>
          <Story />
        </div>
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
    totalPages: 8,
    pagesShown: 4,
    size: "default",
    hideFastforward: false,
    hideNav: false
  }
};

export const Default = {};
