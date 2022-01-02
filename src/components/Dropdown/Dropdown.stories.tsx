import { action } from "@storybook/addon-actions";
import {
  boolean,
  object,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { DropdownSkeleton } from "./DropdownSkeleton";

export default { title: "Components/Dropdown", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

const sampleItemConfig = [
  {
    id: "option-0",
    value: "option-0",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: "option-1",
    value: "option-1",
    text: "Option 1",
    disabled: true
  },
  {
    id: "option-2",
    value: "option-2",
    text: "Option 2"
  },
  {
    id: "option-3",
    value: "option-3",
    text: "Option 3"
  },
  {
    id: "option-4",
    value: "option-4",
    text: "Option 4"
  },
  {
    id: "option-5",
    value: "option-5",
    text: "Option 5"
  }
];

export const Uncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Dropdown
        light={boolean("light", false)}
        label={text("label", "Dropdown label")}
        title={text("title", "Dropdown title")}
        size={select("size", sizeOptions, defaultSize) as any}
        id="some-dropdown"
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        items={object("items", sampleItemConfig)}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
      />
    </div>
  );
};

export const Controlled = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Dropdown
        light={boolean("light", false)}
        label={text("label", "Dropdown label")}
        title={text("title", "Dropdown title")}
        size={select("size", sizeOptions, defaultSize) as any}
        id="some-dropdown"
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        items={object("items", sampleItemConfig)}
        value={selectedValue}
        onChange={(newValue) => {
          setSelectedValue(newValue);
          action("onChange")(newValue);
        }}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
      />
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <DropdownSkeleton
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
