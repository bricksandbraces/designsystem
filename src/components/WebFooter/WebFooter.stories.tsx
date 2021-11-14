import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import WebFooter from "./WebFooter";

export default { title: "Web/A_REFA_WebFooter", decorators: [withKnobs] };

export const Default = () => {
  return (
    <WebFooter
      baseUrl={text("Header URL", "#")}
      linkItems={object("Header items", [
        { href: "#", label: "Imprint" },
        { href: "#", label: "Legal" },
        { href: "#", label: "Cookies" },
        { href: "#", label: "Privacy" },
        { href: "#", label: "Contact" }
      ])}
      description={text(
        "WebFooter description",
        "Wir nutzen Cookies, um deine Experience zu verbessern. Deine Einstellungen kannst du jederzeit in den Einstellungen ändern."
      )}
      descriptionLink={object("Description Link", {
        href: "#",
        label: "Zu den Cookieeinstellungen"
      })}
    />
  );
};
