import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

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
      className={cx(`${prefix}--tooltip--container`, {
        [`${prefix}--tooltip--top`]: tooltipPosition === "top",
        [`${prefix}--tooltip--bottom`]: tooltipPosition === "bottom",
        [`${prefix}--tooltip--left`]: tooltipPosition === "left",
        [`${prefix}--tooltip--right`]: tooltipPosition === "right"
      })}
      {...rest}
    >
      {children}
      <div className={`${prefix}--tooltip--caret-container`}>
        <div className={`${prefix}--tooltip--caret`} />
      </div>
    </div>
  );
};

export default ContainerTooltipContainer;
