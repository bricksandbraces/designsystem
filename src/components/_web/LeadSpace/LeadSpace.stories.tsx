import { text, object, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import LeadSpace from "./LeadSpace";
import Header from "../../WebHeader/WebHeader";
import LeadSpaceBlock from "./LeadSpaceBlock";

export default { title: "Web/A_REFA_LeadSpace", decorators: [withKnobs] };

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
