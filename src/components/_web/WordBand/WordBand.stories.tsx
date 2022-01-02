import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { WordBand } from "./WordBand";

export default { title: "Web/WordBand", decorators: [withKnobs] };

export const Default = () => {
  return <WordBand />;
};
