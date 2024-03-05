import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { TextArea } from "./TextArea";
import { TextAreaSkeleton } from "./TextAreaSkeleton";

export default {
  title: "Input/TextArea",
  decorators: [
    (Story: any) => (
      <div style={{ height: "100vh", padding: "32px" }}>
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
    disabled: {
      control: {
        type: "boolean"
      }
    },
    readOnly: {
      control: {
        type: "boolean"
      }
    },
    maxLength: {
      control: {
        type: "number"
      }
    },
    characterLimit: {
      control: {
        type: "number"
      }
    },
    characterLimitExceededText: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    light: false,
    warningText: "",
    errorText: "",
    id: "textfield-01",
    label: "Label",
    placeholder: "Enter text...",
    disabled: false,
    readOnly: false,
    maxLength: undefined,
    characterLimit: undefined,
    characterLimitExceededText: "Ooops that is too long!"
  }
};

export const Uncontrolled = {
  args: {
    defaultValue: "Henlo"
  },
  render: (args: any) => {
    return (
      <TextArea
        {...args}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        onKeyDown={action("onKeyDown")}
      />
    );
  }
};

export const Controlled = {
  render: (args: any) => {
    const [value, setValue] = useState<string | undefined>("");
    return (
      <TextArea
        {...args}
        value={value ?? ""}
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

export const WithCharacterCounter = {
  args: {
    characterLimit: 30,
    characterLimitExceededText: "Ooops that is too long!"
  },
  render: (args: any) => {
    return (
      <TextArea
        {...args}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        onKeyDown={action("onKeyDown")}
      />
    );
  }
};

export const Skeleton = () => {
  return <TextAreaSkeleton />;
};
