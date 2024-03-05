import { action } from "@storybook/addon-actions";
import React from "react";
import { UserProfile } from "./UserProfile";

export default {
  title: "Pattern/UserProfile",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    name: {
      control: {
        type: "text"
      }
    },
    subName: {
      control: {
        type: "text"
      }
    },
    imgUrl: {
      control: {
        type: "text"
      }
    },
    links: {
      control: {
        type: "object"
      }
    }
  },
  args: {
    name: "Hendrik Ulbrich",
    subName: "@hendriku",
    imgUrl: "https://randomuser.me",
    links: [
      { href: "#", label: "User profile" },
      { href: "#", label: "Settings" },
      { href: "#", label: "FAQ" }
    ]
  }
};

export const Default = (args: any) => {
  return <UserProfile {...args} onPrimaryAction={action("onPrimaryAction")} />;
};
