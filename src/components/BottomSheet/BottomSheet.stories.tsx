import { action } from "@storybook/addon-actions";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import { BottomSheet } from "./BottomSheet";
import { BottomSheetBody } from "./BottomSheetBody";
import { BottomSheetFooter } from "./BottomSheetFooter";
import { BottomSheetHeader } from "./BottomSheetHeader";

export default { title: "Prompt/BottomSheet", decorators: [withKnobs] };

const options = {
  Small: "sm",
  Medium: "md",
  Large: "lg",
  XLarge: "xlg"
};

const defaultValue = "sm";

export const DefaultControlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "32px",
        color: "white"
      }}
    >
      <Button
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
        }}
      >
        Open BottomSheet
      </Button>
      <BottomSheet
        size={select("size", options, defaultValue) as any}
        open={open}
        onClose={() => {
          setOpen(false);
          action("onClose")();
        }}
        closeOnOutsideClick
      >
        <BottomSheetHeader
          headline={text("headline", "Update available")}
          subHeadline={text(
            "subheadline",
            "Install via npm package manager or yarn"
          )}
          borderWidth={1}
        />
        <BottomSheetBody>
          {text(
            "Children text",
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          )}
        </BottomSheetBody>
        <BottomSheetFooter
          borderWidth={1}
          primaryLabel={text("primaryLabel", "Update now")}
          secondaryLabel={text("secondaryLabel", "Cancel")}
          onSecondaryClick={() => {
            setOpen(false);
            action("onSecondaryClick")();
          }}
          onPrimaryClick={() => {
            setOpen(false);
            action("onPrimaryClick")();
          }}
        />
      </BottomSheet>
    </div>
  );
};

export const NestedControlled = () => {
  const [open, setOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
        }}
      >
        Open BottomSheet
      </Button>
      <BottomSheet
        size="md"
        open={open}
        closeOnOutsideClick={!secondOpen}
        onClose={(event) => {
          setOpen(false);
          action("onClose")(event);
        }}
      >
        <BottomSheetHeader
          headline={text("headline1", "Behind")}
          subHeadline={text(
            "subHeadline1",
            "Install via npm package manager or yarn"
          )}
        />
        <BottomSheetBody>
          {text(
            "children",
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          )}
        </BottomSheetBody>
        <BottomSheetFooter
          primaryLabel={text("primaryLabel1", "Confirm")}
          secondaryLabel={text("secondaryLabel1", "Cancel")}
          onSecondaryClick={(event) => {
            setOpen(false);
            action("onSecondaryClick")(event);
          }}
          onPrimaryClick={(event) => {
            setSecondOpen(true);
            action("onPrimaryClick")(event);
          }}
        />
      </BottomSheet>
      <BottomSheet
        size={select("size", options, defaultValue) as any}
        open={secondOpen}
        onClose={(event) => {
          setSecondOpen(false);
          action("onClose")(event);
        }}
      >
        <BottomSheetHeader
          headline={text("headline2", "Always on top of it")}
          subHeadline={text(
            "subHeadline2",
            "Install via npm package manager or yarn"
          )}
        />
        <BottomSheetBody>
          {text("children2", "Lorem ipsum dolor sit amet.")}
        </BottomSheetBody>
        <BottomSheetFooter
          primaryLabel={text("primaryLabel2", "I am sure")}
          secondaryLabel={text("secondaryLabel2", "Cancel")}
          onSecondaryClick={(event) => {
            setSecondOpen(false);
            action("onSecondaryClick")(event);
          }}
          onPrimaryClick={(event) => {
            setSecondOpen(false);
            action("onPrimaryClick")(event);
          }}
        />
      </BottomSheet>
    </div>
  );
};
