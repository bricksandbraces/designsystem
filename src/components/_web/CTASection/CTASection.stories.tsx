import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { CTASection } from "./CTASection";

export default { title: "Web/CTASection", decorators: [withKnobs] };

export const Default = () => {
  return <CTASection />;
};
