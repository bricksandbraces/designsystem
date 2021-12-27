import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Divider } from "./Divider";

export default { title: "Components Ready/Divider", decorators: [withKnobs] };

const options = {
  subtle: "subtle",
  default: "default",
  harsh: "harsh"
};

const defaultKind = "default";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Divider type={select("type", options, defaultKind) as any} />
      </div>
    </div>
  );
};
