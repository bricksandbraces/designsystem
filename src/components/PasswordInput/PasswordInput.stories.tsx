import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import PasswordInput from "./PasswordInput";

export default { title: "Components/A_REFA_PasswordInput", decorators: [withKnobs] };

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
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter Password")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
      />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <PasswordInput
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        value={value}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter Password")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};
