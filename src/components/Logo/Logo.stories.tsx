import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Logo } from "./Logo";

export default { title: "Utilities/Logo", decorators: [withKnobs] };

const colorOptions = {
  Black: "black",
  White: "white"
};

const defaultColor = "white";

const sizeOptions = {
  ExtraSmall: "xsmall",
  Small: "small",
  Medium: "medium",
  Large: "large",
  ExtraLarge: "xlarge"
};

const defaultSize = "medium";

const typeOptions = {
  LogoMark: "logomark",
  LogoType: "logotype"
};

const defaultType = "logotype";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <Logo
        color={select("color", colorOptions, defaultColor) as any}
        size={select("size", sizeOptions, defaultSize) as any}
        type={select("type", typeOptions, defaultType) as any}
      />
    </div>
  );
};
