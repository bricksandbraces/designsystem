import React, { JSXElementConstructor, ReactElement } from "react";
import Tippy, { TippyProps } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { roundArrow } from "tippy.js";
import "tippy.js/dist/svg-arrow.css";
import cx from "classnames";
import { prefix } from "../../settings";

type ContainerTooltipProps = {
  /**
   * ContainerTooltip Children
   */
  children?: ReactElement<any, string | JSXElementConstructor<any>>;

  /**
   * ContainerTooltip Theme
   */
  theme: "light" | "dark";

  /**
   * ContainerTooltip Content
   */
  tooltipContent: React.ReactNode;
} & Omit<TippyProps, "content">;

const ContainerTooltip = ({
  children,
  theme,
  tooltipContent,
  ...props
}: ContainerTooltipProps) => {
  return (
    <Tippy
      className={cx(`${prefix}--tooltip ${prefix}--tooltip-container`)}
      arrow={roundArrow}
      trigger="click"
      animation="bbds-animation"
      duration={150}
      theme={theme === "light" ? "bbds-light" : "bbds-dark"}
      {...props}
      content={tooltipContent}
    >
      <span role="button">{children}</span>
    </Tippy>
  );
};

export default ContainerTooltip;
