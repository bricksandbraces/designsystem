import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import WebHeader from "./WebHeader";

export default { title: "Web/A_REFA_WebHeader", decorators: [withKnobs] };

export const Default = () => {
  return (
    <WebHeader
      baseUrl={text("WebHeader URL", "#")}
      linkItems={object("WebHeader items", [
        { href: "#", label: "About us" },
        { href: "#", label: "Contact" },
        { href: "#", label: "Blog" }
      ])}
    />
  );
};
