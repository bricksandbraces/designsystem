import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import Typography from "../Typography/Typography";
import RangeInput from "./RangeInput";

export default { title: "Components/RangeInput", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <RangeInput
          label={text("Label", "RangeInput label")}
          id="checkbox"
          min={30}
          max={50}
        />
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <RangeInput
          label={text("Label", "RangeInput label")}
          id="checkbox"
          min={30}
          max={50}
        />
      </div>
    </div>
  );
};
