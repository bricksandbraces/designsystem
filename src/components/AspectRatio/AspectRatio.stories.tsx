import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import AspectRatio from "./AspectRatio";
import { Grid, Column } from "../Grid/Grid";
import { prefix } from "../../settings";

export default { title: "Components/AspectRatio", decorators: [withKnobs] };

const ratio = {
  "1x1": "1x1",
  "2x1": "2x1",
  "4x3": "4x3",
  "16x9": "16x9",
  "21x9": "21x9"
};

const defaultRatio = "1x1";

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div style={{ width: "256px" }}>
        <AspectRatio ratio={select("Ratio", ratio, defaultRatio) as any}>
          <div className={`${prefix}--grid--example`}>Content</div>
        </AspectRatio>
      </div>
    </div>
  );
};
