import React from "react";
import cx from "classnames";

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
    <span
      className={cx("tooltip--text", {
        "tooltip--caret": withCaret,
        "tooltip--top": tooltipPosition === "top",
        "tooltip--bottom": tooltipPosition === "bottom",
        "tooltip--left": tooltipPosition === "left",
        "tooltip--right": tooltipPosition === "right"
      })}
    >
      {tooltipLabel}
    </span>
  );
};

export default HoverTooltipText;
