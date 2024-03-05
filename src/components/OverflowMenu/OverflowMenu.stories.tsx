import {
  Icon2fa,
  IconAccessible,
  IconAntennaBars3,
  IconCrop,
  IconTrash
} from "@tabler/icons-react";
import React from "react";
import { Divider } from "../..";
import { OverflowMenu } from "./OverflowMenu";
import { OverflowMenuItem } from "./OverflowMenuItem";

export default {
  title: "Prompt/OverflowMenu",
  decorators: [
    (Story: any) => (
      <div style={{ padding: "32px", display: "flex" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "small", "default"]
      }
    }
  },
  args: {
    size: "default"
  }
};

export const Default = (args: any) => {
  return (
    <OverflowMenu size={args.size}>
      <OverflowMenuItem onClick={() => {}} icon={<Icon2fa />}>
        Enable 2FA
      </OverflowMenuItem>
      <OverflowMenuItem href="#" icon={<IconAccessible />}>
        Turn on accessibility
      </OverflowMenuItem>
      <Divider />
      <OverflowMenuItem icon={<IconAntennaBars3 />}>
        Check connectivity
      </OverflowMenuItem>
      <OverflowMenuItem icon={<IconCrop />}>Crop image</OverflowMenuItem>
      <Divider />
      <OverflowMenuItem danger icon={<IconTrash />}>
        Delete
      </OverflowMenuItem>
    </OverflowMenu>
  );
};
