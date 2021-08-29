import { text, withKnobs } from "@storybook/addon-knobs";
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
      />
    </div>
  );
};
