import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import TextArea from "./TextArea";

export default { title: "Components/A_REFA_TextArea", decorators: [withKnobs] };

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
      />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextArea
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        value={value}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setValue(event.target.value);
        }}
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
      />
    </div>
  );
};
