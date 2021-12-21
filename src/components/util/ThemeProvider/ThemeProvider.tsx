import React from "react";
import usePreferredColorScheme from "../../../hooks/usePreferredColorScheme";

export type ThemeProviderProps = {
  /**
   * ThemeProvider Children
   */
  children?: React.ReactNode;

  /**
   * ThemeProvider Theme: Accepts the definitions for the light and dark system theme.
   * Automatically prefixes the token definitions with --.
   */
  theme?: { light?: Record<string, string>; dark?: Record<string, string> };

  /**
   * ThemeProvider Style
   */
  style?: React.StyleHTMLAttributes<HTMLDivElement>;

  /**
   * ThemeProvider ClassName
   */
  className?: string;
};

const ThemeProvider = ({
  className,
  theme,
  style,
  children
}: ThemeProviderProps) => {
  const currentThemeSetting = usePreferredColorScheme("light");
  const currentTheme = theme?.[currentThemeSetting] ?? {};
  return (
    <div
      data-theme-provider
      className={className}
      style={{
        ...Object.keys(currentTheme).reduce((prev, currentToken) => {
          return { ...prev, [`--${currentToken}`]: currentTheme[currentToken] };
        }, {}),
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
