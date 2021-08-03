import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Divider from "./Divider";

export default { title: "Components/Divider", decorators: [withKnobs] };

const options = {
  subtle: "subtle",
  default: "default",
  explicit: "explicit"
};

const defaultKind = "default";

const sizeOptions = {
  thin: "thin",
  thicker: "thicker",
  thick: "thick"
};

const defaultSizeValue = "thin";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ width: "405px" }}>
        <Divider
          kind={select("Kind", options, defaultKind) as any}
          size={select("Size", sizeOptions, defaultSizeValue) as any}
          margin={boolean("Margin", true)}
        />
      </div>
    </div>
  );
};
