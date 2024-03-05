import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "./Modal";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";

export default {
  title: "Prompt/Modal",
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
  args: {
    size: "sm",
    headline: "Update available",
    subheadline: "Install via npm package manager or yarn",
    childrenText: "Lorem ipsum dolor sit amet.",
    primaryLabel: "Update now",
    secondaryLabel: "Cancel",
    headline1: "Behind",
    subHeadline1: "Install via npm package manager or yarn",
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
          Open Modal
        </Button>
        <Modal
          size={args.size}
          open={open}
          onClose={() => {
            setOpen(false);
            action("onClose")();
          }}
          closeOnOutsideClick
        >
          <ModalHeader
            headline={args.headline}
            subHeadline={args.subheadline}
            borderWidth={1}
          />
          <ModalBody>{args.childrenText}</ModalBody>
          <ModalFooter
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
        </Modal>
      </>
    );
  }
};

export const NestedControlled = {
  render: (args: any) => {
    const [open, setOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    return (
      <>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            setOpen(true);
          }}
        >
          Open Modal
        </Button>
        <Modal
          size="md"
          open={open}
          closeOnOutsideClick={!secondOpen}
          onClose={(event) => {
            setOpen(false);
            action("onClose")(event);
          }}
        >
          <ModalHeader
            headline={args.headline1}
            subHeadline={args.subHeadline1}
          />
          <ModalBody>{args.childrenText}</ModalBody>
          <ModalFooter
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
        </Modal>
        <Modal
          size={args.size}
          open={secondOpen}
          onClose={(event) => {
            setSecondOpen(false);
            action("onClose")(event);
          }}
        >
          <ModalHeader
            headline={args.headline2}
            subHeadline={args.subHeadline2}
          />
          <ModalBody>{args.childrenText}</ModalBody>
          <ModalFooter
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
        </Modal>
      </>
    );
  }
};
