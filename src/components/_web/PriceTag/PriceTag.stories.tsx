import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { PriceTag } from "./PriceTag";

export default { title: "Web/PriceTag", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div
      style={{ width: "256px", margin: "32px", display: "flex", gap: "32px" }}
    >
      <PriceTag />
      <PriceTag promotion />
      <PriceTag />
    </div>
  );
};
