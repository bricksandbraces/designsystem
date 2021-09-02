import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Loading from "./Loading";

export default { title: "Components/Loading", decorators: [withKnobs] };

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
        loadingDescription={text("Label", "Loading spinner")}
        size={select("Size", sizeOptions, defaultSize) as any}
        isLoading={boolean("Is Loading?", true)}
        disabled={boolean("Disabled", false)}
        withOverlay={boolean("With Overlay?", false)}
      />
    </div>
  );
};
