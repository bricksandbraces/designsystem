import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Label } from "../Typography/Typography";
import { TextInput } from "./TextInput";
import { TextInputSkeleton } from "./TextInputSkeleton";

export default {
  title: "Input/TextInput",
  decorators: [
    (Story: any) => (
      <div style={{ height: "100vh", padding: "32px", color: "white" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    light: {
      control: {
        type: "boolean"
      }
    },
    warningText: {
      control: {
        type: "text"
      }
    },
    errorText: {
      control: {
        type: "text"
      }
    },
    id: {
      control: {
        type: "text"
      }
    },
    label: {
      control: {
        type: "text"
      }
    },
    placeholder: {
      control: {
        type: "text"
      }
    },
    autoComplete: {
      control: {
        type: "select",
        options: ["off", "on"]
      }
    },
    type: {
      control: {
        type: "select",
        options: ["text", "password", "email", "number", "tel", "url"]
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    },
    readOnly: {
      control: {
        type: "boolean"
      }
    }
  },
  args: {
    fluid: false,
    light: false,
    warningText: "",
    errorText: "",
    id: "textfield-01",
    label: "Label",
    placeholder: "Enter text...",
    autoComplete: "off",
    type: "text",
    disabled: false,
    readOnly: false,
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
    onKeyDown: action("onKeyDown")
  }
};

export const Uncontrolled = {
  args: {
    defaultValue: "Henlo"
  },
  render: (args: any) => {
    const { defaultValue } = args;
    // this is only a monitoring value since uncontrolled input holds the value
    const [reference, setReference] = useState<string>(defaultValue);
    return (
      <>
        <TextInput
          {...args}
          defaultValue={defaultValue}
          onChange={(newValue, event) => {
            setReference(newValue);
            action("onChange")(newValue, event);
          }}
        />
        <Label>Reference value: {reference}</Label>
      </>
    );
  }
};

export const Controlled = {
  render: (args: any) => {
    // this is the single source of truth
    const [value, setValue] = useState<string>("");
    return (
      <TextInput
        {...args}
        value={value}
        onChange={(newValue, event) => {
          setValue(newValue);
          action("onChange")(newValue, event);
        }}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        onKeyDown={action("onKeyDown")}
      />
    );
  }
};

export const Skeleton = {
  render: (args: any) => {
    return <TextInputSkeleton size={args.size} />;
  }
};
