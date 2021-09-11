import React, { ReactNode } from "react";
import cx from "classnames";
import TooltipTrigger from "./TooltipTrigger";
import HoverTooltipText from "./HoverTooltipText";

type HoverTooltipProps = {
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
  tooltipPosition: "top" | "bottom" | "left" | "right";

  /**
   * Label of tooltip.
   */
  tooltipLabel: string;
};

const HoverTooltip = ({
  children,
  className,
  tooltipPosition,
  open,
  tooltipLabel,
  withCaret,
  disabled
}: HoverTooltipProps) => {
  return (
    <TooltipTrigger className={cx(className)} disabled={disabled} open={open}>
      {children}
      <HoverTooltipText
        tooltipLabel={tooltipLabel}
        tooltipPosition={tooltipPosition}
        withCaret={withCaret}
      />
    </TooltipTrigger>
  );
};

export default HoverTooltip;
