import { number, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import TextArea from "./TextArea";

export default { title: "Components/TextArea", decorators: [withKnobs] };

export const Uncontrolled = () => {
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextArea
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("Placeholder", "Enter text...")}
        maxLength={number("Max Length", undefined as any)}
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
        placeholder={text("Placeholder", "Enter text...")}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setValue(event.target.value);
        }}
        maxLength={number("Max Length", undefined as any)}
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
        defaultValue={text("Default Text", "Henlo")}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("Placeholder", "Enter text...")}
        characterLimit={number("Character Limit", 30)}
        characterLimitExceededText={text(
          "Character Limit Exceeded Text",
          "Ooops that is too long!"
        )}
      />
    </div>
  );
};
