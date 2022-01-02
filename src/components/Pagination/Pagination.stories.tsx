import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Pagination } from "./Pagination";

export default { title: "Components/Pagination", decorators: [withKnobs] };

const sizeOptions = {
  Large: "large",
  Small: "small",
  Default: "default"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Pagination
          hideFastforward={boolean("hideFastforward", false)}
          hideNav={boolean("hideNav", false)}
          totalPages={8}
          pagesShown={4}
          size={select("size", sizeOptions, defaultSize) as any}
        />
      </div>
    </div>
  );
};
