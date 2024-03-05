import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Select } from "./Select";
import { SelectSkeleton } from "./SelectSkeleton";

export default {
  component: Select,
  title: "Input/Select",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      Default: "default",
      Small: "small",
      Large: "large"
    },
    options: {
      control: {
        type: "object"
      }
    }
  },
  args: {
    id: "some-select",
    light: false,
    label: "Label",
    size: "default",
    warningText: "",
    errorText: "",
    options: [
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
    ],
    disabled: false,
    readOnly: false,
    onChange: action("onChange")
  }
};

export const Uncontrolled = {
  args: {
    defaultValue: "cappucino"
  }
};

export const Controlled = {
  args: {
    value: "espresso"
  },
  render: (args: any) => {
    const [value, setValue] = useState<string | undefined>(args.value);
    return (
      <Select
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event?.target?.value);
          action("onChange")(event);
        }}
      />
    );
  }
};

export const Skeleton = {
  render: () => {
    return <SelectSkeleton />;
  }
};
