import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Footer from "./Footer";

export default { title: "Footer", decorators: [withKnobs] };

export const Default = () => {
  return (
    <Footer
      baseUrl={text("Header URL", "#")}
      linkItems={object("Header items", [
        { href: "#", label: "Imprint" },
        { href: "#", label: "Legal" },
        { href: "#", label: "Cookies" },
        { href: "#", label: "Data privacy" }
      ])}
      description={text(
        "Footer description",
        "Wir nutzen Cookies, um deine Experience zu verbessern. Deine Einstellungen kannst du jederzeit in den Einstellungen ändern."
      )}
      descriptionLink={object("Description Link", {
        href: "#",
        label: "Zu den Cookieeinstellungen"
      })}
    />
  );
};
