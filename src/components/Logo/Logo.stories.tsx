import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Logo from "./Logo";

export default { title: "Logo", decorators: [withKnobs] };

const variantOptions = {
  Black: "black",
  White: "white"
};

const defaultVariant = "white";

const sizeOptions = {
  Small: "small",
  Medium: "medium",
  Large: "large",
  ExtraLarge: "xlarge"
};

const defaultSize = "medium";

const kindOptions = {
  LogoMark: "logomark",
  LogoType: "logotype"
};

const defaultKind = "logotype";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Logo
        variant={select("Variant", variantOptions, defaultVariant) as any}
        size={select("Size", sizeOptions, defaultSize) as any}
        kind={select("kind", kindOptions, defaultKind) as any}
      />
    </div>
  );
};
