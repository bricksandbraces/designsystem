import { boolean, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import CookieModal from "./CookieModal";

export default { title: "Web/CookieModal", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#fff" }}>
      <CookieModal open={boolean("Open", true)} />
    </div>
  );
};
