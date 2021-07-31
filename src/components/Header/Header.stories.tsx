import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Header from "./Header";

export default { title: "Web/Header", decorators: [withKnobs] };

export const Default = () => {
  return (
    <Header
      baseUrl={text("Header URL", "#")}
      linkItems={object("Header items", [
        { href: "#", label: "About us" },
        { href: "#", label: "Contact" },
        { href: "#", label: "Blog" }
      ])}
    />
  );
};
