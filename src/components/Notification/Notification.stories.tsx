import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { InlineNotification, ToastNotification } from "../..";

export default {
  title: "Prompt/Notification",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["warning", "info", "success", "danger"]
      }
    }
  },
  args: {
    type: "info",
    open: true,
    hideCloseButton: false,
    title: "This is a title",
    subTitle: "While this is a subtitle"
  }
};

export const Inline = {
  render: (args: any) => {
    const [, setOpen] = useState(true);
    return (
      <InlineNotification
        {...args}
        onClose={(event) => {
          setOpen(false);
          action("onClose")(event);
        }}
      />
    );
  }
};

export const Toast = {
  args: { time: "12:23 Uhr" },
  render: (args: any) => {
    const [, setOpen] = useState(true);
    return (
      <ToastNotification
        {...args}
        onClose={(event) => {
          setOpen(false);
          action("onClose")(event);
        }}
      />
    );
  }
};
