import { action } from "@storybook/addon-actions";
import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React, { useState } from "react";
import RangeInput from "./RangeInput";
import RangeInputSkeleton from "./RangeInputSkeleton";

export default {
  title: "Components Ready/RangeInput",
  decorators: [withKnobs]
};

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <RangeInput
          size={select("size", sizeOptions, defaultSize) as any}
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          id="checkbox"
          label={text("Label", "Slider")}
          min={number("Min", 30)}
          step={number("Step", 2)}
          max={number("Max", 50)}
          defaultValue={number("Default Value", 40)}
          hideInput={boolean("hideInput", false)}
          onChange={action("onChange")}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
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
          size={select("size", sizeOptions, defaultSize) as any}
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          id="checkbox"
          label={text("Label", "Slider")}
          min={number("Min", 30)}
          step={number("Step", 2)}
          max={number("Max", 50)}
          value={value}
          onChange={(newValue, event) => {
            setValue(newValue);
            action("onChange")(newValue, event);
          }}
          hideInput={boolean("hideInput", false)}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
        />
      </div>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <RangeInputSkeleton
        hideInput={boolean("hideInput", false)}
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
