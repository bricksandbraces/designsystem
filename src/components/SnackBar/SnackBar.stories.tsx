import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import SnackBar from "./SnackBar";

export default { title: "SnackBar", decorators: [withKnobs] };

const options = {
  warning: "warning",
  info: "info",
  success: "success",
  danger: "danger"
};

const defaultValue = "info";

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ width: "405px" }}>
        <SnackBar
          messageType={select("Messagetype", options, defaultValue)}
          open={boolean("Open", open)}
          onClose={() => {
            setOpen(false);
          }}
          message={text("Message", "Message")}
        />
      </div>
    </div>
  );
};
