import React, { ReactNode } from "react";
import cx from "classnames";
import useControlled from "../../hooks/useControlled";

type TooltipProps = {
  /**
   * Label that is shown.
   */
  children: ReactNode;

  /**
   * DOM class names for the container
   */
  className?: string;

  /**
   * Controlls the open state of the tooltip manually
   */
  open?: boolean;

  /**
   * Disables the tooltip when the children is disabled
   */
  disabled?: boolean;

  /**
   * Gives tooltip a caret
   */
  withCaret?: boolean;

  /**
   * Position of tooltip.
   */
  position: "top" | "bottom" | "left" | "right";

  /**
   * Label of tooltip.
   */
  label: string;
};

const Tooltip = ({
  children,
  className,
  position,
  open,
  label,
  withCaret,
  disabled
}: TooltipProps) => {
  const controlled = useControlled(open);
  return (
    <div
      className={cx(className, "tooltip--container", {
        "tooltip--visible-hover": !controlled,
        "tooltip--visible": controlled && open,
        "tooltip--disabled": disabled
      })}
    >
      {children}
      <span
        className={cx("tooltip--text", {
          "tooltip--caret": withCaret,
          "tooltip--top": position === "top",
          "tooltip--bottom": position === "bottom",
          "tooltip--left": position === "left",
          "tooltip--right": position === "right"
        })}
      >
        {label}
      </span>
    </div>
  );
};

export default Tooltip;
