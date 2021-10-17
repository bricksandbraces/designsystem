import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import NumberInput from "./NumberInput";

export default { title: "Components/NumberInput", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <NumberInput
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("size", sizeOptions, defaultSize) as any}
        id={text("id", "numberfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
      />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <NumberInput
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("size", sizeOptions, defaultSize) as any}
        value={value}
        id={text("id", "numberfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.valueAsNumber);
        }}
      />
    </div>
  );
};
