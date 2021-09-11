import React, { ReactNode } from "react";
import cx from "classnames";
import useControlled from "../../hooks/useControlled";

type TooltipContainerProps = {
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
};

const TooltipContainer = ({
  children,
  className,
  open,
  disabled
}: TooltipContainerProps) => {
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
    </div>
  );
};

export default TooltipContainer;
