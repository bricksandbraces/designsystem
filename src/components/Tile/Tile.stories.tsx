import React from "react";
import { ClickableTile } from "./ClickableTile";
import { Tile } from "./Tile";
import { TileSkeleton } from "./TileSkeleton";

export default {
  title: "Layout/Tile",
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
    light: {
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    },
    readOnly: {
      control: {
        type: "boolean"
      }
    },
    href: {
      control: {
        type: "text"
      }
    },
    target: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    light: false,
    disabled: false,
    readOnly: false,
    href: undefined,
    target: undefined
  }
};

export const Default = {
  render: (args: any) => {
    return <Tile {...args}>Default Tile</Tile>;
  }
};

export const Clickable = {
  render: (args: any) => {
    return <ClickableTile {...args}>Clickable Tile</ClickableTile>;
  }
};

export const Skeleton = {
  render: () => {
    return <TileSkeleton />;
  }
};
