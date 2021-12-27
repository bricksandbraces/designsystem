import React from "react";
import Tippy from "@tippyjs/react";
import type { TippyProps } from "@tippyjs/react";
import cx from "classnames";
import { roundArrow } from "tippy.js";
import { prefix } from "../../settings";

export type TooltipProps = {
  /**
   * Tooltip Theme
   */
  theme?: "light" | "dark";

  /**
   * Tooltip Content
   */
  tooltipContent: React.ReactNode;
} & Omit<TippyProps, "content">;

export const Tooltip = React.forwardRef(function Tooltip(
  { children, theme = "light", tooltipContent, ...props }: TooltipProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <Tippy
      ref={ref}
      className={cx(`${prefix}--tooltip ${prefix}--tooltip-default`)}
      arrow={roundArrow}
      animation="bbds-animation"
      duration={150}
      theme={theme === "light" ? "bbds-light" : "bbds-dark"}
      {...props}
      content={tooltipContent}
    >
      {children}
    </Tippy>
  );
});
