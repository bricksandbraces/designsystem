import { action } from "@storybook/addon-actions";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import TextArea from "./TextArea";
import TextAreaSkeleton from "./TextAreaSkeleton";

export default { title: "Components Ready/TextArea", decorators: [withKnobs] };

export const Uncontrolled = () => {
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextArea
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        maxLength={number("maxLength", undefined as any)}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        onKeyDown={action("onKeyDown")}
      />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<string | undefined>("");
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextArea
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        value={value ?? ""}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        onChange={(newValue, event) => {
          setValue(newValue);
          action("onChange")(newValue, event);
        }}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        onKeyDown={action("onKeyDown")}
        maxLength={number("maxLength", undefined as any)}
      />
    </div>
  );
};

export const WithCharacterCounter = () => {
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextArea
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        defaultValue={text("defaultValue", "Henlo")}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        characterLimit={number("characterLimit", 30)}
        characterLimitExceededText={text(
          "characterLimitExceededText",
          "Ooops that is too long!"
        )}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        onKeyDown={action("onKeyDown")}
      />
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextAreaSkeleton />
    </div>
  );
};
