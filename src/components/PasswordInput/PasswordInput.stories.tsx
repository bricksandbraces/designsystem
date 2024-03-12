import { action, actions } from "@storybook/addon-actions";
import React, { useState } from "react";
import { PasswordInput } from "./PasswordInput";
import { PasswordInputSkeleton } from "./PasswordInputSkeleton";

export default {
  component: PasswordInput,
  title: "Input/PasswordInput",
  decorators: [
    (Story: any) => (
      <div style={{ height: "100vh", padding: "32px" }}>
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
    light: false,
    fluid: false,
    warningText: "",
    errorText: "",
    id: "textfield-01",
    label: "Label",
    placeholder: "Enter Password",
    autoComplete: "off"
  }
};

const passwordActions = actions(
  "onBlur",
  "onFocus",
  "onKeyDown",
  "onVisibilityChange"
);

export const Uncontrolled = {
  render: (args: any) => {
    return (
      <PasswordInput
        {...args}
        onChange={action("onChange")}
        {...passwordActions}
      />
    );
  }
};

export const ControlledTextValue = {
  render: (args: any) => {
    const [value, setValue] = useState<string>("");
    return (
      <PasswordInput
        {...args}
        value={value}
        onChange={(newValue, event) => {
          setValue(newValue);
          action("onChange")(newValue, event);
        }}
        {...passwordActions}
      />
    );
  }
};

export const Skeleton = {
  render: (args: any) => {
    return <PasswordInputSkeleton size={args.size} />;
  }
};
