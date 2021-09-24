import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type HoverTooltipTextProps = {
  /**
   * Gives tooltip a caret
   */
  withCaret?: boolean;

  /**
   * Position of tooltip.
   */
  tooltipPosition: "top" | "bottom" | "left" | "right";

  /**
   * Label of tooltip.
   */
  tooltipLabel: string;
};

const HoverTooltipText = ({
  tooltipPosition,
  tooltipLabel,
  withCaret
}: HoverTooltipTextProps) => {
  return (
    <div
      className={cx(`${prefix}--tooltip--hover`, {
        [`${prefix}--tooltip--with-caret`]: withCaret,
        [`${prefix}--tooltip--top`]: tooltipPosition === "top",
        [`${prefix}--tooltip--bottom`]: tooltipPosition === "bottom",
        [`${prefix}--tooltip--left`]: tooltipPosition === "left",
        [`${prefix}--tooltip--right`]: tooltipPosition === "right"
      })}
    >
      {tooltipLabel}
      {withCaret && (
        <div className={`${prefix}--tooltip--caret-container`}>
          <div className={`${prefix}--tooltip--caret`} />
        </div>
      )}
    </div>
  );
};

export default HoverTooltipText;
