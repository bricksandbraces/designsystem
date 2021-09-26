import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Intro from "./Intro";

export default { title: "Welcome", decorators: [withKnobs] };

export const Welcome = () => {
  return <Intro />;
};
