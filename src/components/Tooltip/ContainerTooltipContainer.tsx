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
  tooltipPosition: "top" | "bottom";

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
        "tooltip--caret": withCaret,
        "tooltip--top": tooltipPosition === "top",
        "tooltip--bottom": tooltipPosition === "bottom"
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ContainerTooltipContainer;
