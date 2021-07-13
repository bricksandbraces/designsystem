import React, { ReactNode } from "react";
import cx from "classnames";

type TooltipProps = {
  /**
   * Label that is shown.
   */
  children: ReactNode;

  /**
   * Position of tooltip.
   */
  position: "top" | "bottom" | "left" | "right";

  /**
   * Label of tooltip.
   */
  label: string;
};

const Tooltip = ({ children, position, label }: TooltipProps) => {
  return (
    <div className="tooltip-container">
      {children}
      <span
        className={cx("tooltip-text", {
          "tooltip-top": position === "top",
          "tooltip-bottom": position === "bottom",
          "tooltip-left": position === "left",
          "tooltip-right": position === "right"
        })}
      >
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
