import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import TextInput from "./TextInput";

export default { title: "Components/TextInput", decorators: [withKnobs] };

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
        fluid={boolean("Fluid variant?", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("Size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("Placeholder", "Enter text...")}
        autoComplete={select("Autocomplete", ["off", "on"], "off") as any}
        type={text("HTML Input Type", "text") as any}
      />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
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
          setValue(event.target.value);
        }}
      />
    </div>
  );
};
