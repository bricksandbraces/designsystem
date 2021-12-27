import { action } from "@storybook/addon-actions";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { InlineNotification, ToastNotification } from "../..";

export default {
  title: "Components Ready/Notification",
  decorators: [withKnobs]
};

const typeOptions = {
  warning: "warning",
  info: "info",
  success: "success",
  danger: "danger"
};

const defaultType = "info";

export const Inline = () => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <InlineNotification
        type={select("type", typeOptions, defaultType) as any}
        open={boolean("open", open)}
        onClose={(event) => {
          setOpen(false);
          action("onClose")(event);
        }}
        hideCloseButton={boolean("hideCloseButton", false)}
        title={text("title", "This is a title")}
        subTitle={text("subTitle", "While this is a subtitle")}
      />
    </div>
  );
};

export const Toast = () => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <ToastNotification
        type={select("type", typeOptions, defaultType) as any}
        open={boolean("open", open)}
        onClose={(event) => {
          setOpen(false);
          action("onClose")(event);
        }}
        hideCloseButton={boolean("hideCloseButton", false)}
        title={text("title", "This is a title")}
        subTitle={text("subTitle", "While this is a subtitle")}
        time={text("time", "12:23 Uhr")}
      />
    </div>
  );
};
