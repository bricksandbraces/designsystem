import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import AspectRatio from "./AspectRatio";
import { Grid, Column } from "../Grid/Grid";

export default { title: "AspectRatio", decorators: [withKnobs] };

const ratio = {
  "1x1": "1x1",
  "2x1": "2x1",
  "4x3": "4x3",
  "16x9": "16x9",
  "21x9": "21x9"
};

const defaultRatio = "1x1";

export const AspectRatioComponent = () => {
  return (
    <Grid gutter>
      <Column sm={1} md={2} lg={4} xlg={4}>
        <AspectRatio ratio={select("Ratio", ratio, defaultRatio) as any}>
          <div className="grid--example">Content</div>
        </AspectRatio>
      </Column>
      <Column sm={1} md={2} lg={4} xlg={4}>
        <AspectRatio ratio={select("Ratio", ratio, defaultRatio) as any}>
          <div className="grid--example">Content</div>
        </AspectRatio>
      </Column>
      <Column sm={1} md={2} lg={4} xlg={4}>
        <AspectRatio ratio={select("Ratio", ratio, defaultRatio) as any}>
          <div className="grid--example">Content</div>
        </AspectRatio>
      </Column>
      <Column sm={1} md={2} lg={4} xlg={4}>
        <AspectRatio ratio={select("Ratio", ratio, defaultRatio) as any}>
          <div className="grid--example">Content</div>
        </AspectRatio>
      </Column>
    </Grid>
  );
};
