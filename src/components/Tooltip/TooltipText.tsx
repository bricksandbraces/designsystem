import React from "react";
import cx from "classnames";

type TooltipTextProps = {
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

const TooltipText = ({
  tooltipPosition,
  tooltipLabel,
  withCaret
}: TooltipTextProps) => {
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

export default TooltipText;
