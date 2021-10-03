import React from "react";
import "tippy.js/dist/tippy.css";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "../..";
import TTooltip from "./TTooltip";

export default { title: "Components/TTooltip", decorators: [withKnobs] };

export const TippyComponent = () => {
  return (
    <TTooltip tooltipContent="You sneaky little thing.">
      <Button>Don`t you dare hovering me.</Button>
    </TTooltip>
  );
};
