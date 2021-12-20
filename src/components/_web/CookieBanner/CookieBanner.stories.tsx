import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import CookieBanner from "./CookieBanner";

export default { title: "Web/CookieBanner", decorators: [withKnobs] };

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CookieBanner
        label={text("Label", "This is the cookie banner label.")}
        linkLabel={text("Link label", "Cookie link")}
        linkHref={text("Link Href", "#")}
        buttonLabel={text("Button label", "Close")}
        onButtonClick={(event) => {
          setOpen(false);
          action("onButtonClick")(event);
        }}
        open={boolean("open", open)}
      />
    </div>
  );
};
