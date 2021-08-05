import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import Button from "../Button/Button";

export default { title: "Components/Modal", decorators: [withKnobs] };

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
        onClose={() => {
          setOpen(false);
        }}
        closeOnOutsideClick
        withDivider={boolean("With Divider", false)}
      >
        <ModalHeader
          headline={text("Headline", "Update available")}
          subheadline={text(
            "Subheadline",
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
          primaryLabel={text("Primary Label", "Update now")}
          secondaryLabel={text("Secondary Label", "Cancel")}
          onClose={() => {
            setOpen(false);
          }}
          onPrimary={() => {
            setOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export const Doppeldecker = () => {
  const [open, setOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#fff" }}>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        size={select("Size", options, defaultValue) as any}
        open={open}
        disabled={secondOpen}
        onClose={() => {
          setOpen(false);
        }}
        closeOnOutsideClick={!secondOpen}
        withDivider={boolean("With Divider", false)}
      >
        <ModalHeader
          headline={text("Headline 1", "Behind")}
          subheadline={text(
            "Subheadline",
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
          primaryLabel={text("Primary Label 1", "Confirm")}
          secondaryLabel={text("Secondary Label", "Cancel")}
          onClose={() => {
            setOpen(false);
          }}
          onPrimary={() => {
            setSecondOpen(true);
          }}
        />
      </Modal>
      <Modal
        size={select("Size", options, defaultValue) as any}
        open={secondOpen}
        onClose={() => {
          setSecondOpen(false);
        }}
        closeOnOutsideClick
        withDivider={boolean("With Divider", false)}
      >
        <ModalHeader
          headline={text("Headline 2", "Always on top of it")}
          subheadline={text(
            "Subheadline",
            "Install via npm package manager or yarn"
          )}
        />
        <ModalBody>
          {text("Children text 2", "Lorem ipsum dolor sit amet.")}
        </ModalBody>
        <ModalFooter
          primaryLabel={text("Primary Label 2", "I am sure")}
          secondaryLabel={text("Secondary Label", "Cancel")}
          onClose={() => {
            setSecondOpen(false);
          }}
          onPrimary={() => {
            setSecondOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};
