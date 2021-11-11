import { getLogger } from "@openbricksandbraces/eloguent";
import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React, { useState } from "react";
import { parseToNumber } from "../../helpers/numberUtilities";
import Label from "../Typography/Label";
import NumberInput from "./NumberInput";
import NumberInputSkeleton from "./NumberInputSkeleton";

export default { title: "Components/NumberInput", decorators: [withKnobs] };

const logger = getLogger("NumberInputStory");

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  const defaultValue = number("defaultValue", 0);
  // this is only a monitoring value since uncontrolled input holds the value
  const [reference, setReference] = useState<number>(defaultValue);
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <NumberInput
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        defaultValue={defaultValue}
        onChange={(event, { parsedValue }) => {
          logger.log(event);
          setReference(parsedValue);
        }}
        size={select("size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        min={number("min", -50)}
        max={number("max", 50)}
        step={number("step", 1)}
      />
      <Label>Reference value: {reference}</Label>
    </div>
  );
};

export const Controlled = () => {
  // this is the single source of truth
  const [textValue, setValue] = useState<string>("1e42");
  const float = boolean("float", false);
  const value = parseToNumber(textValue, float);
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <NumberInput
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        value={textValue}
        onChange={(event, { parsedValue, newValue }) => {
          logger.log(event);
          if (parsedValue != null && !Number.isNaN(parsedValue)) {
            setValue(`${parsedValue}`);
          } else {
            setValue(newValue);
          }
        }}
        min={number("min", -50)}
        max={number("max", 50)}
        step={number("step", 1)}
        float={float}
      />
      <Label>SSoT value: {value}</Label>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <NumberInputSkeleton />
    </div>
  );
};
