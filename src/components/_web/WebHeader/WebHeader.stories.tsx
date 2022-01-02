import { action } from "@storybook/addon-actions";
import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { WebHeader } from "./WebHeader";

export default { title: "Web/WebHeader", decorators: [withKnobs] };

export const DefaultUncontrolled = () => {
  return (
    <WebHeader
      baseUrl={text("baseUrl", "#")}
      linkItems={object("linkItems", [
        { href: "#", label: "About us" },
        { href: "#", label: "Contact" },
        { href: "#", label: "Blog" }
      ])}
      onOpenChange={action("onOpenChange")}
    />
  );
};
