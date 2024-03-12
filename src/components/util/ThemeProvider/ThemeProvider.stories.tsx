import React from "react";
import { Badge, ThemeProvider } from "../../..";

export default {
  title: "Utilities/ThemeProvider"
};

export const Example = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <ThemeProvider
        theme={{
          light: { "color-badge-gray-font": "#444" },
          dark: { "color-badge-gray-font": "#AAA" }
        }}
      >
        <Badge>Outer theme, dynamically from system</Badge>
        <ThemeProvider
          theme={{
            light: { "color-badge-gray-font": "#00F" },
            dark: { "color-badge-gray-font": "#0F0" }
          }}
        >
          <Badge>Inner theme, with custom themes</Badge>
        </ThemeProvider>
        <ThemeProvider
          theme={{
            light: { "color-badge-gray-font": "#FFF" },
            dark: { "color-badge-gray-font": "#FFF" }
          }}
        >
          <Badge>Inner constant theme, always light font</Badge>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};
