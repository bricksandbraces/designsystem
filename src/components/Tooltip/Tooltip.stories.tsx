import { text, select, withKnobs, boolean } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Button } from "../..";
import HoverTooltip from "./HoverTooltip";
import ComposedContainerTooltip from "./ComposedContainerTooltip";
import ContainerTooltipFooter from "./ContainerTooltipFooter";
import ContainerTooltipHeader from "./ContainerTooltipHeader";
import ContainerTooltipBody from "./ContainerTooltipBody";

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
      <HoverTooltip
        withCaret={boolean("withCaret", false)}
        tooltipPosition={
          select("Tooltip position", positioning, defaultPosition) as any
        }
        tooltipLabel={text("Tooltip label", "This is a tooltip")}
      >
        Hover me
      </HoverTooltip>
    </div>
  );
};

export const WithCaretOnHover = () => {
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
      <HoverTooltip
        withCaret
        tooltipPosition={
          select("Tooltip position", positioning, defaultPosition) as any
        }
        tooltipLabel={text("Tooltip label", "This is a tooltip")}
      >
        Hover me
      </HoverTooltip>
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
      <HoverTooltip
        withCaret={boolean("withCaret", false)}
        tooltipPosition={
          select("Tooltip position", positioning, defaultPosition) as any
        }
        tooltipLabel={text("Tooltip label", "This is a tooltip")}
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
      </HoverTooltip>
    </div>
  );
};

export const WithContainer = () => {
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
      <ComposedContainerTooltip
        tooltipPosition={
          select("Tooltip position", positioning, defaultPosition) as any
        }
      >
        <ContainerTooltipHeader>Tooltip Container</ContainerTooltipHeader>
        <ContainerTooltipBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </ContainerTooltipBody>
        <ContainerTooltipFooter>
          <Button size="small">Delete</Button>
        </ContainerTooltipFooter>
      </ComposedContainerTooltip>
    </div>
  );
};
