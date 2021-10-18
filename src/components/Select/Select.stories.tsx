import {
  boolean,
  object,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React, { useState } from "react";
import Select from "./Select";
import SelectSkeleton from "./SelectSkeleton";

export default { title: "Components/Select", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

const options = [
  { value: "", text: "Please select an option" },
  { value: "coffee", text: "Coffee" },
  {
    group: "With Milk",
    options: [
      { value: "latte macchiato", text: "Latte Macchiato" },
      { value: "cappucino", text: "Cappucino" }
    ]
  },
  { value: "espresso", text: "Espresso" }
];

export const Uncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Select
        id="some-select"
        label={text("label", "Label")}
        size={select("size", sizeOptions, defaultSize) as any}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        options={object("options", options) as any}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        defaultValue="cappucino"
      />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState("espresso");
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Select
        id="some-dropdown"
        label={text("label", "Label")}
        size={select("size", sizeOptions, defaultSize) as any}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        options={object("options", options) as any}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <SelectSkeleton />
    </div>
  );
};
