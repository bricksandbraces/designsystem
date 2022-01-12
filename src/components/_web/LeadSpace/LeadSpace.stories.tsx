import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { LeadSpace } from "./LeadSpace";
import { LeadSpaceBlock } from "./LeadSpaceBlock";

export default { title: "Web/LeadSpace", decorators: [withKnobs] };

export const WithImage = () => {
  return (
    <LeadSpace
      backgroundImage={text(
        "backgroundImage",
        "https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
      )}
      title={text("title", "Creating a better tomorrow.")}
    />
  );
};

export const WithCTA = () => {
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

export const WithText = () => {
  return (
    <LeadSpace
      text="With the power of technology."
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
      videoUrl={text("videoUrl", "assets/video.mp4")}
      backgroundImage={text(
        "backgroundImage",
        "https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
      )}
      title={text("Leadspace title", "Creating a better tomorrow.")}
    />
  );
};

export const Block = () => {
  return (
    <LeadSpaceBlock
      title={text("title", "What we do")}
      text={text(
        "text",
        "Lorem ipsum Digital Agency sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      )}
    />
  );
};
