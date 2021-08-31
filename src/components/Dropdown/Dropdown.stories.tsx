import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default { title: "Components/Dropdown", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

const sampleItemConfig = object("Items", [
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
]);

export const Uncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Dropdown
        title={text("Title", "Dropdown title")}
        label={text("Label", "Dropdown label")}
        size={select("Size", sizeOptions, defaultSize) as any}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        defaultSelectedIndex={3}
        items={sampleItemConfig}
      />
    </div>
  );
};

export const Controlled = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Dropdown
        title={text("Title", "Dropdown title")}
        label={text("Label", "Dropdown label")}
        size={select("Size", sizeOptions, defaultSize) as any}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        items={sampleItemConfig}
        selectedIndex={selectedIndex}
        onChange={(newIndex) => {
          console.log(newIndex);
          setSelectedIndex(newIndex ?? 0);
        }}
      />
    </div>
  );
};
