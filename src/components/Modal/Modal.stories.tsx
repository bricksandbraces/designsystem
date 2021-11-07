import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import Button from "../Button/Button";

export default { title: "Components/A_REFA_Modal", decorators: [withKnobs] };

const options = {
  Small: "sm",
  Medium: "md",
  Large: "lg",
  XLarge: "xlg"
};

const defaultValue = "sm";

export const DefaultControlled = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "32px",
        color: "white"
      }}
    >
      <Modal
        size={select("size", options, defaultValue) as any}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeOnOutsideClick
        withDivider={boolean("With Divider", false)}
        primaryFocus={""}
      >
        <ModalHeader
          headline={text("headline", "Update available")}
          subHeadline={text(
            "subheadline",
            "Install via npm package manager or yarn"
          )}
        />
        <ModalBody>
          {text(
            "Children text",
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          )}
        </ModalBody>
        <ModalFooter
          primaryLabel={text("primaryLabel", "Update now")}
          secondaryLabel={text("secondaryLabel", "Cancel")}
          onSecondaryClick={() => {
            setOpen(false);
          }}
          onPrimaryClick={() => {
            setOpen(false);
          }}
        />
      </Modal>
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
        Open Modal
      </Button>
      <Modal
        size="md"
        open={open}
        closeOnOutsideClick={!secondOpen}
        onClose={() => {
          setOpen(false);
        }}
        withDivider={boolean("With Divider", false)}
      >
        <ModalHeader
          headline={text("headline1", "Behind")}
          subHeadline={text(
            "subHeadline1",
            "Install via npm package manager or yarn"
          )}
        />
        <ModalBody>
          {text(
            "children",
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et earebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          )}
        </ModalBody>
        <ModalFooter
          primaryLabel={text("primaryLabel1", "Confirm")}
          secondaryLabel={text("secondaryLabel1", "Cancel")}
          onSecondaryClick={() => {
            setOpen(false);
          }}
          onPrimaryClick={() => {
            setSecondOpen(true);
          }}
        />
      </Modal>
      <Modal
        size={select("size", options, defaultValue) as any}
        open={secondOpen}
        onClose={() => {
          setSecondOpen(false);
        }}
        withDivider={boolean("withDivider", false)}
      >
        <ModalHeader
          headline={text("headline2", "Always on top of it")}
          subHeadline={text(
            "subHeadline2",
            "Install via npm package manager or yarn"
          )}
        />
        <ModalBody>
          {text("children2", "Lorem ipsum dolor sit amet.")}
        </ModalBody>
        <ModalFooter
          primaryLabel={text("primaryLabel2", "I am sure")}
          secondaryLabel={text("secondaryLabel2", "Cancel")}
          onSecondaryClick={() => {
            setSecondOpen(false);
          }}
          onPrimaryClick={() => {
            setSecondOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};
