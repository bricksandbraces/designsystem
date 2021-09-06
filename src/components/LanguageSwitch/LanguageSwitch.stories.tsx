import { object, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

export default { title: "Components/LanguageSwitch", decorators: [withKnobs] };

export const Uncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <LanguageSwitch
          defaultValue="Deutsch"
          items={object("Link data", [
            { id: "1", label: "EN", value: "English" },
            { id: "2", label: "DE", value: "Deutsch" }
          ])}
          id="checkbox"
        />
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [selectedValue, setSelectedValue] = useState<string>("Deutsch");
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <LanguageSwitch
          value={selectedValue}
          items={object("Link data", [
            { id: "1", label: "EN", value: "English" },
            { id: "2", label: "DE", value: "Deutsch" }
          ])}
          id="checkbox-2"
          onChange={(newValue) => {
            setSelectedValue(newValue);
          }}
        />
      </div>
    </div>
  );
};
