import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import TextInput from "./TextInput";
import TextInputSkeleton from "./TextInputSkeleton";

<<<<<<< HEAD
export default {
  title: "Components/A_REFA_TextInput",
  decorators: [withKnobs]
};
=======
export default { title: "Components/TextInput", decorators: [withKnobs] };
>>>>>>> e276f4370bb9842ffe4676a45f2e49ef2ef3f250

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextInput
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        warningText={text("warningText", "")}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        errorText={text("errorText", "")}
<<<<<<< HEAD
=======
        size={select("Size", sizeOptions, defaultSize) as any}
>>>>>>> e276f4370bb9842ffe4676a45f2e49ef2ef3f250
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        type={text("type", "text") as any}
      />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ height: "100vh", padding: "32px" }}>
      <TextInput
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        disabled={boolean("disabled", false)}
        readOnly={boolean("readOnly", false)}
        warningText={text("warningText", "")}
        errorText={text("errorText", "")}
<<<<<<< HEAD
        value={value}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("placeholder", "Enter text...")}
        autoComplete={select("autoComplete", ["off", "on"], "off") as any}
        type={text("type", "text") as any}
=======
        size={select("Size", sizeOptions, defaultSize) as any}
        value={value}
        id={text("id", "textfield-01")}
        label={text("label", "Label")}
        placeholder={text("Placeholder", "Enter text...")}
        autoComplete={select("Autocomplete", ["off", "on"], "off") as any}
        type={text("HTML Input Type", "text") as any}
>>>>>>> e276f4370bb9842ffe4676a45f2e49ef2ef3f250
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      />
<<<<<<< HEAD
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <TextInputSkeleton
        fluid={boolean("fluid", false)}
        size={select("size", sizeOptions, defaultSize) as any}
      />
=======
>>>>>>> e276f4370bb9842ffe4676a45f2e49ef2ef3f250
    </div>
  );
};
