import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import FormLabel from "./FormLabel";

export default { title: "Components/FormLabel", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <FormLabel>Hello</FormLabel>
      </div>
    </div>
  );
};
