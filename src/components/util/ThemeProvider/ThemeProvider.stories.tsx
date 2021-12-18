import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Badge } from "../../..";
import ThemeProvider from "./ThemeProvider";

export default {
  title: "Util/ThemeProvider",
  decorators: [withKnobs]
};

export const Example = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <ThemeProvider>
        <Badge>Outer theme, dynamically from system</Badge>
        <ThemeProvider
          theme={{
            light: { "--color-badge-gray-font": "#00F" },
            dark: { "--color-badge-gray-font": "#0F0" }
          }}
        >
          <Badge>Outer theme, dynamically from system</Badge>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};
