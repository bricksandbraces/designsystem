import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Label } from "../..";
import { RangeInput } from "./RangeInput";
import { RangeInputSkeleton } from "./RangeInputSkeleton";

export default {
  title: "Input/RangeInput",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <div style={{ width: "405px" }}>
          <Story />
        </div>
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"]
      }
    }
  },
  args: {
    min: 30,
    step: 2,
    max: 50,
    hideInput: false,
    light: false,
    disabled: false,
    size: "default",
    readOnly: false,
    id: "range-input"
  }
};

export const Uncontrolled = {
  args: {
    defaultValue: 42
  },
  render: (args: any) => {
    const { defaultValue } = args;
    // this is only a monitoring value since uncontrolled input holds the value
    const [parsedValue, setReference] = useState<number | undefined>(
      defaultValue
    );
    return (
      <>
        <RangeInput
          {...args}
          defaultValue={defaultValue}
          onChange={(params, event) => {
            setReference(params.parsedValue);
            action("onChange")(params, event);
          }}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
        />
        <Label>Reference parsedValue: {parsedValue}</Label>
      </>
    );
  }
};

export const Controlled = {
  render: (args: any) => {
    const [textValue, setValue] = useState<string>("33e42");
    const parsedValue = Number.parseInt(textValue);
    return (
      <>
        <RangeInput
          {...args}
          value={textValue}
          onChange={(params, event) => {
            if (
              params.parsedValue != null &&
              !Number.isNaN(params.parsedValue)
            ) {
              setValue(`${params.parsedValue}`);
            } else {
              setValue(params.newValue ?? "");
            }
            action("onChange")(params, event);
          }}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
        />
        <Label>parsedValue: {parsedValue}</Label>
      </>
    );
  }
};

export const Skeleton = {
  render: (args: any) => {
    return <RangeInputSkeleton hideInput={args.hideInput} size={args.size} />;
  }
};
