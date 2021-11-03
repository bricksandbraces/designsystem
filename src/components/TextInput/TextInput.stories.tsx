import { getLogger } from "@openbricksandbraces/eloguent";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Label from "../Typography/Label";
import TextInput from "./TextInput";

export default { title: "Components/TextInput", decorators: [withKnobs] };

const logger = getLogger("TextInputStory");

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  const defaultValue = text("Default Value", "");
  // this is only a monitoring value since uncontrolled input holds the value
  const [reference, setReference] = useState<string>(defaultValue);
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <TextInput
        fluid={boolean("Fluid variant?", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        defaultValue={defaultValue}
        onChange={(event) => {
          logger.log(event.target.value);
          setReference(event.target.value);
        }}
        size={select("Size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("Placeholder", "Enter text...")}
        autoComplete={select("Autocomplete", ["off", "on"], "off") as any}
        type={text("HTML Input Type", "text") as any}
      />
      <Label>Reference value: {reference}</Label>
    </div>
  );
};

export const Controlled = () => {
  // this is the single source of truth
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ height: "100vh", padding: "32px", color: "white" }}>
      <TextInput
        fluid={boolean("Fluid variant?", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("Size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("Placeholder", "Enter text...")}
        autoComplete={select("Autocomplete", ["off", "on"], "off") as any}
        type={text("HTML Input Type", "text") as any}
        value={value}
        onChange={(event) => {
          logger.log(event.target.value);
          setValue(event.target.value);
        }}
      />
      <Label>SSoT value: {value}</Label>
    </div>
  );
};
