import { action, actions } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import PasswordInputSkeleton from "./PasswordInputSkeleton";

export default {
  title: "Components/A_REFA_PasswordInput",
  decorators: [withKnobs]
};

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

const passwordActions = actions(
  "onBlur",
  "onFocus",
  "onKeyDown",
  "onVisibilityChange"
);

export const Uncontrolled = () => {
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <PasswordInput
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter Password")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        onChange={action("onChange")}
        {...passwordActions}
      />
    </div>
  );
};

export const ControlledTextValue = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <PasswordInput
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        value={value}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter Password")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        onChange={(newValue, event) => {
          setValue(newValue);
          action("onChange")(newValue, event);
        }}
        {...passwordActions}
      />
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <PasswordInputSkeleton
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
