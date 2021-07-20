import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import LeadSpace from "./LeadSpace";

export default { title: "LeadSpace", decorators: [withKnobs] };

export const LeadSpaceImage = () => {
  return <LeadSpace />;
};
