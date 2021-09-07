import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Select from "./Select";
import SelectItem from "./SelectItem";
import SelectItemGroup from "./SelectItemGroup";

export default { title: "Components/Select", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Select
        title={text("Title", "Select title")}
        label={text("Label", "Select label")}
        size={select("Size", sizeOptions, defaultSize) as any}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
      >
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
        <SelectItemGroup label="Opt Group">
          <SelectItem value="option-4" text="Option 4" />
          <SelectItem value="option-5" text="Option 5" />
          <SelectItem value="option-6" text="Option 6" />
        </SelectItemGroup>
      </Select>
    </div>
  );
};
