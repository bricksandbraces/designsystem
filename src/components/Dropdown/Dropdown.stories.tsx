import { object, select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Dropdown from "./Dropdown";

export default { title: "Components/Dropdown", decorators: [withKnobs] };

const sizeOptions = {
  default: "default",
  small: "small",
  large: "large"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px", marginBottom: "2rem" }}>
        <Dropdown
          id="Dropdown"
          size={select("Size", sizeOptions, defaultSize) as any}
          dropdownItems={object("Header items", [
            { href: "#", label: "About us", selected: true },
            { href: "#", label: "Contact" },
            { href: "#", label: "Blog" }
          ])}
        />
      </div>
    </div>
  );
};
