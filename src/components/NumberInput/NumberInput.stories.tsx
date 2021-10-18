import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import NumberInput from "./NumberInput";
import NumberInputSkeleton from "./NumberInputSkeleton";

export default {
  title: "Components/A_REFA_NumberInput",
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
      <NumberInput
        fluid={boolean("fluid", false)}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("size", sizeOptions, defaultSize) as any}
        id={text("id", "numberfield-01")}
        min={0}
        max={100}
        defaultValue={50}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
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
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        size={select("size", sizeOptions, defaultSize) as any}
        min={0}
        max={100}
        value={value}
        id={text("id", "numberfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.valueAsNumber);
        }}
      />
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <NumberInputSkeleton fluid={boolean("fluid", false)} />
    </div>
  );
};
