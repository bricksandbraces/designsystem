import React, { ReactNode } from "react";
import cx from "classnames";

type ContainerTooltipContainerProps = {
  /**
   * Gives tooltip a caret
   */
  withCaret?: boolean;

  /**
   * Position of tooltip.
   */
  tooltipPosition: "top" | "bottom" | "left" | "right";

  /**
   * Children of tooltip.
   */
  children: ReactNode;
};

const ContainerTooltipContainer = ({
  tooltipPosition,
  children,
  withCaret,
  ...rest
}: ContainerTooltipContainerProps) => {
  return (
    <div
      className={cx("tooltip--container", {
        "tooltip--top": tooltipPosition === "top",
        "tooltip--bottom": tooltipPosition === "bottom",
        "tooltip--left": tooltipPosition === "left",
        "tooltip--right": tooltipPosition === "right"
      })}
      {...rest}
    >
      {children}
      <div className="tooltip--caret-container">
        <div className="tooltip--caret" />
      </div>
    </div>
  );
};

export default ContainerTooltipContainer;
