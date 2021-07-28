import { select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Modal from "./Modal";
import Typography from "../Typography/Typography";

export default { title: "Modal", decorators: [withKnobs] };

const options = {
  Small: "sm",
  Medium: "md",
  Large: "lg",
  XLarge: "xlg"
};

const defaultValue = "sm";

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#fff" }}>
      <Modal
        size={select("Size", options, defaultValue) as any}
        open={open}
        headline={text("Headline", "Update available")}
        primaryLabel={text("Primary Label", "Download")}
        cancelLabel={text("Cancel Label", "Cancel")}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Typography
          type="text"
          token="body"
          className="modal--container-subline"
        >
          {text(
            "Children text",
            "An update is available. Please go to the App-Store and download the most recent app."
          )}
        </Typography>
      </Modal>
    </div>
  );
};
