import React, { createContext, useContext } from "react";
import { usePreferredColorScheme } from "../../../hooks/usePreferredColorScheme";
import { defaultTheme } from "../../../theme";
import type { Theme } from "../../../theme";

export type ThemeProviderProps = {
  /**
   * ThemeProvider Children
   */
  children?: React.ReactNode;

  /**
   * ThemeProvider Theme: Accepts the definitions for the light and dark system appearance.
   * Automatically prefixes the token definitions with --.
   */
  theme?: Theme;

  /**
   * ThemeProvider Style
   */
  style?: React.StyleHTMLAttributes<HTMLDivElement>;

  /**
   * ThemeProvider ClassName
   */
  className?: string;
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({
  className,
  theme = defaultTheme,
  style,
  children
}: ThemeProviderProps) => {
  const currentAppearanceSetting = usePreferredColorScheme("light");
  const currentAppearance = theme?.[currentAppearanceSetting] ?? {};
  return (
    <ThemeContext.Provider value={theme}>
      <div
        data-theme-provider
        className={className}
        style={{
          ...Object.keys(currentAppearance).reduce((prev, currentToken) => {
            return {
              ...prev,
              [`--${currentToken}`]: currentAppearance[currentToken]
            };
          }, {}),
          ...style
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};
