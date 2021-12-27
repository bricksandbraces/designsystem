import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Badge, ThemeProvider } from "../../..";

export default {
  title: "Utilities/ThemeProvider",
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
          <Badge>Inner theme, with custom themes</Badge>
        </ThemeProvider>
        <ThemeProvider
          theme={{
            light: { "--color-badge-gray-font": "#FFF" },
            dark: { "--color-badge-gray-font": "#FFF" }
          }}
        >
          <Badge>Inner constant theme, always light font</Badge>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};
