import { boolean, object, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

export default { title: "Components/LanguageSwitch", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <LanguageSwitch
          items={object("Link data", [
            { id: "1", label: "EN", langName: "English", defaultLang: true },
            { id: "1", label: "DE", langName: "Deutsch" }
          ])}
          id="checkbox"
        />
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <LanguageSwitch
          items={object("Link data", [
            { id: "1", label: "EN", langName: "English" },
            { id: "1", label: "DE", langName: "Deutsch" }
          ])}
          id="checkbox"
        />
      </div>
    </div>
  );
};
