import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CookieModal, { OptType } from "./CookieModal";

export default { title: "Web/A_REFA_CookieModal", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      Please update the background to see the modal (storybook bug).
      <CookieModal
        open
        headline={text("headline", "Cookie Settings")}
        primaryLabel={text("primaryLabel", "Accept All")}
        secondaryLabel={text("secondaryLabel", "Accept selected")}
        intro={text("intro", "This is an introduction.")}
        onPrimaryClick={() => {}}
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
            id: "essentials",
            label: "Essential Cookies 2"
          }
        ])}
      />
    </div>
  );
};
