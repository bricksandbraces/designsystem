import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { DropdownSkeleton } from "./DropdownSkeleton";

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

export default {
  component: Dropdown,
  title: "Input/Dropdown",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"]
      }
    }
  },
  args: {
    size: "default",
    label: "Dropdown label",
    title: "Dropdown title",
    light: false,
    warningText: "",
    errorText: "",
    disabled: false,
    readOnly: false,
    items: sampleItemConfig
  },
  decorator: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <Story />
      </div>
    )
  ]
};

export const Uncontrolled = {
  render: (args: any) => {
    return (
      <Dropdown
        {...args}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
      />
    );
  }
};

export const Controlled = {
  render: (args: any) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    return (
      <Dropdown
        {...args}
        value={selectedValue}
        onChange={(newValue) => {
          setSelectedValue(newValue);
          action("onChange")(newValue);
        }}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
      />
    );
  }
};

export const Skeleton = (args: any) => {
  return <DropdownSkeleton size={args.size} />;
};
