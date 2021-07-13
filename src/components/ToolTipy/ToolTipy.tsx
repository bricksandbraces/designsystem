import React, { ReactNode } from "react";
import cx from "classnames";

type ToolTipyProps = {
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

const ToolTipy = ({ children, position, label }: ToolTipyProps) => {
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

export default ToolTipy;
