import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import CookieBanner from "./CookieBanner";

export default { title: "Web/CookieBanner", decorators: [withKnobs] };

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ width: "405px" }}>
        <CookieBanner
          label={text("Label", "This is the cookie banner label.")}
          linkLabel={text("Link label", "Cookie link")}
          linkHref={text("Link Href", "#")}
          buttonLabel={text("Button label", "Close")}
          onClick={() => {
            setOpen(false);
          }}
          open={boolean("Open", open)}
        />
      </div>
    </div>
  );
};
