import { text, object, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import LeadSpace from "./LeadSpace";

export default { title: "LeadSpace", decorators: [withKnobs] };

export const WithImage = () => {
  return (
    <LeadSpace
      ctaItems={object("CTA", [
        { href: "#", label: "What we do", showChevron: true },
        { href: "#", label: "Learn more about us", showChevron: false }
      ])}
      backgroundImage={text(
        "Background Image",
        "https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
      )}
      title={text("Leadspace title", "Creating a better tomorrow.")}
    />
  );
};
