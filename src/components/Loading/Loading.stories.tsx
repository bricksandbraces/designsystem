import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Loading } from "./Loading";

export default { title: "Components Ready/Loading", decorators: [withKnobs] };

const sizeOptions = {
  Inline: "inline",
  Small: "small",
  Default: "default",
  Large: "large"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Loading
        size={select("size", sizeOptions, defaultSize) as any}
        active={boolean("active", true)}
        withOverlay={boolean("withOverlay", false)}
        loadingDescription={text("loadingDescripton", "Loading spinner")}
      />
    </div>
  );
};
