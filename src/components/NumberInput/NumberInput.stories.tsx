import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { parseToNumber } from "../../helpers/numberUtilities";
import { Label } from "../Typography/Typography";
import { NumberInput } from "./NumberInput";
import { NumberInputSkeleton } from "./NumberInputSkeleton";

export default {
  title: "Input/NumberInput",
  decorators: [
    (Story: any) => (
      <div style={{ height: "100vh", padding: "32px", color: "white" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["default", "small", "large"]
      }
    }
  },
  args: {
    size: "default",
    label: "Label",
    placeholder: "Enter text...",
    autoComplete: "off",
    min: -50,
    max: 50,
    step: 1,
    light: false,
    warningText: "",
    errorText: "",
    readOnly: false,
    disabled: false,
    fluid: false,
    id: "textfield-01",
    defaultValue: 0
  }
};

export const Uncontrolled = {
  render: (args: any) => {
    const { defaultValue, ...rest } = args;
    const backedDefaultValue = defaultValue ?? 0;
    // this is only a monitoring value since uncontrolled input holds the value
    const [parsedValue, setReference] = useState<number | undefined>(
      backedDefaultValue
    );
    return (
      <>
        <NumberInput
          {...rest}
          defaultValue={backedDefaultValue}
          onChange={(params, event) => {
            setReference(params.parsedValue);
            action("onChange")(event, params);
          }}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
          onKeyDown={action("onKeyDown")}
        />
        <Label>Reference parsedValue: {parsedValue}</Label>
      </>
    );
  }
};

export const Controlled = {
  args: {
    fluid: false
  },
  render: (args: any) => {
    const [textValue, setValue] = useState<string>("1e42");
    const { float } = args;
    const parsedValue = parseToNumber(textValue, float);
    return (
      <div style={{ height: "100vh", padding: "32px", color: "white" }}>
        <NumberInput
          {...args}
          value={textValue}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
          onKeyDown={action("onKeyDown")}
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
          float={float}
        />
        <Label>parsedValue: {parsedValue}</Label>
      </div>
    );
  }
};

export const Skeleton = {
  render: () => {
    return <NumberInputSkeleton />;
  }
};
