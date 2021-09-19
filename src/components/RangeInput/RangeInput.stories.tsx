import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import RangeInput from "./RangeInput";

export default { title: "Components/RangeInput", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <RangeInput
          id="checkbox"
          label="Slider"
          min={30}
          max={50}
          defaultValue={40}
        />
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<number>(40);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <RangeInput
          id="checkbox"
          label="Slider"
          min={30}
          max={50}
          value={value}
          onChange={(event) => {
            setValue((event.target.value as any) * 1);
          }}
        />
      </div>
    </div>
  );
};
