import React from "react";
import usePreferredColorScheme from "../../../hooks/usePreferredColorScheme";

export type ThemeProviderProps = {
  /**
   * ThemeProvider Children
   */
  children?: React.ReactNode;

  /**
   * ThemeProvider Theme
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
  const currentTheme = usePreferredColorScheme("light");
  return (
    <div
      data-theme-provider
      className={className}
      style={{ ...theme?.[currentTheme], ...style }}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
