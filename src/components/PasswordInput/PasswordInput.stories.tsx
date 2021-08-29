import { select, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import PasswordInput from "./PasswordInput";

export default { title: "Components/PasswordInput", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <PasswordInput
        size={select("Size", sizeOptions, defaultSize) as any}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("Placeholder", "Enter Password")}
        autoComplete={select("Autocomplete", ["off", "on"], "off") as any}
      />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <PasswordInput
        size={select("Size", sizeOptions, defaultSize) as any}
        value={value}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("Placeholder", "Enter Password")}
        autoComplete={select("Autocomplete", ["off", "on"], "off") as any}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};
