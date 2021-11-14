import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import CookieBanner from "./CookieBanner";

export default { title: "Web/A_REFA_CookieBanner", decorators: [withKnobs] };

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CookieBanner
        label={text("label", "This is the cookie banner label. ")}
        linkLabel={text("linkLabel", "Cookie link")}
        linkHref={text("linkHref", "#")}
        buttonLabel={text("buttonLabel", "Close")}
        onButtonClick={() => {
          setOpen(false);
        }}
        open={boolean("open", open)}
      />
    </div>
  );
};
