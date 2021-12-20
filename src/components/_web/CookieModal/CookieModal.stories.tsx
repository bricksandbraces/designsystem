import { action } from "@storybook/addon-actions";
import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CookieModal, { OptType } from "./CookieModal";

export default { title: "Web/CookieModal", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      Please update the background to see the modal (storybook bug).
      <CookieModal
        open
        headline={text("Headline", "Cookie Settings")}
        primaryLabel={text("Primary label", "Accept All")}
        secondaryLabel={text("Secondary label", "Accept selected")}
        intro={text("Intro", "This is an introduction.")}
        onPrimaryClick={action("onPrimaryClick")}
        onClose={action("onClose")}
        onSecondaryClick={action("onSecondaryClick")}
        onSettingChanged={action("onSettingsChanged")}
        settings={object("settings", [
          {
            checked: true,
            type: OptType.ESSENTIAL,
            description: "These cookies are mandatory to execute the page.",
            id: "essentials",
            label: "Essential Cookies"
          },
          {
            checked: true,
            type: OptType.OPT_IN,
            description: "These cookies are mandatory to execute the page.",
            id: "essentials2",
            label: "Essential Cookies 2"
          }
        ])}
      />
    </div>
  );
};
