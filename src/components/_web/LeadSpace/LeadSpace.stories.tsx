import { text, object, withKnobs, boolean } from "@storybook/addon-knobs";
import React from "react";
import LeadSpace from "./LeadSpace";
import Header from "../WebHeader/WebHeader";
import LeadSpaceBlock from "./LeadSpaceBlock";
import { Dropdown } from "../../..";

export default { title: "Web/A_REFA_LeadSpace", decorators: [withKnobs] };

const sampleItemConfig = [
  {
    id: "option-0",
    value: "option-0",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: "option-1",
    value: "option-1",
    text: "Option 1",
    disabled: true
  },
  {
    id: "option-2",
    value: "option-2",
    text: "Option 2"
  },
  {
    id: "option-3",
    value: "option-3",
    text: "Option 3"
  },
  {
    id: "option-4",
    value: "option-4",
    text: "Option 4"
  },
  {
    id: "option-5",
    value: "option-5",
    text: "Option 5"
  }
];

export const WithImage = () => {
  return (
    <LeadSpace
      ctaItems={object("ctaItems", [
        { href: "#", label: "What we do", showChevron: true },
        { href: "#", label: "Learn more about us", showChevron: false }
      ])}
      backgroundImage={text(
        "backgroundImage",
        "https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
      )}
      title={text("title", "Creating a better tomorrow.")}
    />
  );
};

export const WithVideo = () => {
  return (
    <LeadSpace
      ctaItems={object("ctaItems", [
        { href: "#", label: "What we do", showChevron: true },
        { href: "#", label: "Learn more about us", showChevron: false }
      ])}
      videoUrl={text("videoUrl", "video.mp4")}
      backgroundImage={text(
        "backgroundImage",
        "https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
      )}
      title={text("Leadspace title", "Creating a better tomorrow.")}
    />
  );
};

export const WithHeader = () => {
  return (
    <>
      <Header
        baseUrl={text("baseUrl", "#")}
        linkItems={object("linkItems", [
          { href: "#", label: "About us" },
          { href: "#", label: "Contact" },
          { href: "#", label: "Blog" }
        ])}
      />
      <LeadSpace
        ctaItems={object("ctaItems", [
          { href: "#", label: "What we do", showChevron: true },
          { href: "#", label: "Learn more about us", showChevron: false }
        ])}
        videoUrl={text("videoUrl", "video.mp4")}
        backgroundImage={text(
          "backgroundImage",
          "https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
        )}
        title={text("Leadspace title", "Creating a better tomorrow.")}
      />
    </>
  );
};

export const Block = () => {
  return (
    <LeadSpaceBlock
      ctaItems={object("ctaItems", [
        { href: "#", label: "What we do", showChevron: true },
        { href: "#", label: "Learn more about us", showChevron: false }
      ])}
      title={text("title", "What we do")}
      text={text(
        "text",
        "Lorem ipsum Digital Agency sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      )}
    />
  );
};

export const BlockWithHeader = () => {
  return (
    <>
      <Header
        baseUrl={text("baseUrl", "#")}
        linkItems={object("linkItems", [
          { href: "#", label: "About us" },
          { href: "#", label: "Contact" },
          { href: "#", label: "Blog" }
        ])}
      />
      <LeadSpaceBlock
        ctaItems={object("ctaItems", [
          { href: "#", label: "What we do", showChevron: true },
          { href: "#", label: "Learn more about us", showChevron: false }
        ])}
        title={text("title", "What we do")}
        text={text(
          "text",
          "Lorem ipsum Digital Agency sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        )}
      />
    </>
  );
};

export const BlockWithoutCTA = () => {
  return (
    <>
      <LeadSpaceBlock
        title={text("title", "What we do")}
        text={text(
          "text",
          "Lorem ipsum Digital Agency sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        )}
      />
    </>
  );
};

export const BlockWithNode = () => {
  return (
    <>
      <LeadSpaceBlock
        title={text("title", "What we do")}
        text={
          <>
            <Dropdown
              label={text("label", "Dropdown label")}
              title={text("title", "Dropdown title")}
              id="some-dropdown"
              warningText={text("warningText", "")}
              errorText={text("errorText", "")}
              disabled={boolean("disabled", false)}
              readOnly={boolean("readOnly", false)}
              items={object("items", sampleItemConfig)}
            />
          </>
        }
      />
    </>
  );
};
