import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import { BottomSheet } from "./BottomSheet";
import { BottomSheetBody } from "./BottomSheetBody";
import { BottomSheetFooter } from "./BottomSheetFooter";
import { BottomSheetHeader } from "./BottomSheetHeader";

export default {
  component: BottomSheet,
  title: "Prompt/BottomSheet",
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          padding: "32px",
          color: "white"
        }}
      >
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: {
          Small: "sm",
          Medium: "md",
          Large: "lg",
          XLarge: "xlg"
        }
      }
    }
  },
  args: {
    size: "sm",
    headline: "Update available",
    subHeadline: "Install via npm package manager or yarn",
    childrenText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    primaryLabel: "Update now",
    secondaryLabel: "Cancel",
    headline1: "Behind",
    subHeadline1: "Install via npm package manager or yarn",
    primaryLabel1: "Confirm",
    secondaryLabel1: "Cancel",
    headline2: "Always on top of it",
    subHeadline2: "Install via npm package manager or yarn",
    primaryLabel2: "I am sure",
    secondaryLabel2: "Cancel"
  }
};

export const DefaultControlled = {
  render: (args: any) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            setOpen(true);
          }}
        >
          Open BottomSheet
        </Button>
        <BottomSheet
          size={args.size}
          open={open}
          onClose={() => {
            setOpen(false);
            action("onClose")();
          }}
          closeOnOutsideClick
        >
          <BottomSheetHeader
            headline={args.headline}
            subHeadline={args.subHeadline}
            borderWidth={1}
          />
          <BottomSheetBody>{args.childrenText}</BottomSheetBody>
          <BottomSheetFooter
            borderWidth={1}
            primaryLabel={args.primaryLabel}
            secondaryLabel={args.secondaryLabel}
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
      </>
    );
  }
};

export const NestedControlled = (args: any) => {
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
          headline={args.headline1}
          subHeadline={args.subHeadline1}
        />
        <BottomSheetBody>{args.childrenText}</BottomSheetBody>
        <BottomSheetFooter
          primaryLabel={args.primaryLabel1}
          secondaryLabel={args.secondaryLabel1}
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
        size={args.size}
        open={secondOpen}
        onClose={(event) => {
          setSecondOpen(false);
          action("onClose")(event);
        }}
      >
        <BottomSheetHeader
          headline={args.headline2}
          subHeadline={args.subHeadline2}
        />
        <BottomSheetBody>{args.children2}</BottomSheetBody>
        <BottomSheetFooter
          primaryLabel={args.primaryLabel2}
          secondaryLabel={args.secondaryLabel2}
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
