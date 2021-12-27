import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Label } from "../Typography/Typography";
import { TextInput } from "./TextInput";
import { TextInputSkeleton } from "./TextInputSkeleton";

export default {
  title: "Components Ready/TextInput",
  decorators: [withKnobs]
};

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
        light={boolean("light", false)}
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        errorText={text("errorText", "")}
        defaultValue={defaultValue}
        onChange={(newValue, event) => {
          setReference(newValue);
          action("onChange")(newValue, event);
        }}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        type={text("type", "text") as any}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        onKeyDown={action("onKeyDown")}
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
        light={boolean("light", false)}
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        value={value}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        type={text("type", "text") as any}
        onChange={(newValue, event) => {
          setValue(newValue);
          action("onChange")(newValue, event);
        }}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        onKeyDown={action("onKeyDown")}
      />
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <TextInputSkeleton
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
