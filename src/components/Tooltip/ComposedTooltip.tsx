import React, { ReactNode } from "react";
import cx from "classnames";
import TooltipContainer from "./TooltipContainer";
import TooltipText from "./TooltipText";

type ComposedTooltipProps = {
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

const ComposedTooltip = ({
  children,
  className,
  tooltipPosition,
  open,
  tooltipLabel,
  withCaret,
  disabled
}: ComposedTooltipProps) => {
  return (
    <TooltipContainer className={cx(className)} disabled={disabled} open={open}>
      {children}
      <TooltipText
        tooltipLabel={tooltipLabel}
        tooltipPosition={tooltipPosition}
        withCaret={withCaret}
      />
    </TooltipContainer>
  );
};

export default ComposedTooltip;
