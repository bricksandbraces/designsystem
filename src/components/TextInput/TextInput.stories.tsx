import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import TextInput from "./TextInput";
import TextInputSkeleton from "./TextInputSkeleton";

export default {
  title: "Components/A_REFA_TextInput",
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
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextInput
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        errorText={text("errorText", "")}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        type={text("type", "text") as any}
      />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextInput
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
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <TextInputSkeleton
        fluid={boolean("fluid", false)}
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
