import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import InlineNotification from "./InlineNotification";
import ToastNotification from "./ToastNotification";

export default {
  title: "Components/A_REFA_Notification",
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
        type={select("type", typeOptions, defaultType)}
        open={boolean("open", open)}
        onClose={() => {
          setOpen(false);
        }}
        hideCloseButton={boolean("hideCloseButton", false)}
<<<<<<< HEAD
=======
        closeTooltipLabel="Close"
>>>>>>> fix/refactoring
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
        type={select("type", typeOptions, defaultType)}
        open={boolean("open", open)}
        onClose={() => {
          setOpen(false);
        }}
        hideCloseButton={boolean("hideCloseButton", false)}
<<<<<<< HEAD
=======
        closeTooltipLabel="Close"
>>>>>>> fix/refactoring
        title={text("title", "This is a title")}
        subTitle={text("subTitle", "While this is a subtitle")}
        time={text("time", "12:23 Uhr")}
      />
    </div>
  );
};
