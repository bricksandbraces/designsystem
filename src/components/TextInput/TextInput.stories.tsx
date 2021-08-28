import { select, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import TextInput from "./TextInput";

export default { title: "Components/TextInput", decorators: [withKnobs] };

export const Uncontrolled = () => {
  return (
    <div style={{ height: "100vh" }}>
      <TextInput
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
    <div style={{ height: "100vh" }}>
      <TextInput
        value={value}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("Placeholder", "Enter text...")}
        autoComplete={select("Autocomplete", ["off", "on"], "off") as any}
        type={text("HTML Input Type", "text") as any}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};
