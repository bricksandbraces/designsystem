import { text, select, withKnobs, boolean } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Button } from "../..";
import Tooltip from "./Tooltip";

export default { title: "Components/Tooltip", decorators: [withKnobs] };

const positioning = {
  Left: "left",
  Right: "right",
  Top: "top",
  Bottom: "bottom"
};

const defaultPosition = "top";

export const DefaultOnHover = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Tooltip
        withCaret={boolean("withCaret", false)}
        position={
          select("Tooltip position", positioning, defaultPosition) as any
        }
        label={text("Tooltip label", "This is a tooltip")}
      >
        Hover me
      </Tooltip>
    </div>
  );
};

export const Controlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Tooltip
        withCaret={boolean("withCaret", false)}
        position={
          select("Tooltip position", positioning, defaultPosition) as any
        }
        label={text("Tooltip label", "This is a tooltip")}
        open={open}
      >
        <Button
          fluid
          onClick={() => {
            setOpen(!open);
          }}
        >
          Toggle Tooltip
        </Button>
      </Tooltip>
    </div>
  );
};
