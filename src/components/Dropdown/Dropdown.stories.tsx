import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Dropdown from "./Dropdown";

export default { title: "Components/Dropdown", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Dropdown
          label={text("Label", "Checkbox label")}
          size={select("Size", sizeOptions, defaultSize) as any}
          items={object("Items", [
            {
              id: "option-0",
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
              selected: true
            },
            {
              id: "option-1",
              text: "Option 1"
            },
            {
              id: "option-2",
              text: "Option 2"
            },
            {
              id: "option-3",
              text: "Option 3"
            },
            {
              id: "option-4",
              text: "Option 4"
            },
            {
              id: "option-5",
              text: "Option 5"
            }
          ])}
        />
      </div>
    </div>
  );
};
