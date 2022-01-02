import { action } from "@storybook/addon-actions";
import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Label } from "../..";
import { RangeInput } from "./RangeInput";
import { RangeInputSkeleton } from "./RangeInputSkeleton";

export default {
  title: "Components/RangeInput",
  decorators: [withKnobs]
};

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  const defaultValue = number("defaultValue", 40);
  // this is only a monitoring value since uncontrolled input holds the value
  const [parsedValue, setReference] = useState<number | undefined>(
    defaultValue
  );
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <RangeInput
          light={boolean("light", false)}
          size={select("size", sizeOptions, defaultSize) as any}
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          id="checkbox"
          label={text("Label", "Slider")}
          min={number("Min", 30)}
          step={number("Step", 2)}
          max={number("Max", 50)}
          defaultValue={defaultValue}
          hideInput={boolean("hideInput", false)}
          onChange={(params, event) => {
            setReference(params.parsedValue);
            action("onChange")(params, event);
          }}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
        />
      </div>
      <Label>Reference parsedValue: {parsedValue}</Label>
    </div>
  );
};

export const Controlled = () => {
  const [textValue, setValue] = useState<string>("33e42");
  const parsedValue = Number.parseInt(textValue);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <RangeInput
          light={boolean("light", false)}
          size={select("size", sizeOptions, defaultSize) as any}
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          id="range-input"
          label={text("Label", "Slider")}
          min={number("Min", 30)}
          step={number("Step", 2)}
          max={number("Max", 50)}
          value={textValue}
          onChange={(params, event) => {
            if (
              params.parsedValue != null &&
              !Number.isNaN(params.parsedValue)
            ) {
              setValue(`${params.parsedValue}`);
            } else {
              setValue(params.newValue ?? "");
            }
            action("onChange")(params, event);
          }}
          hideInput={boolean("hideInput", false)}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
        />
      </div>
      <Label>parsedValue: {parsedValue}</Label>
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
