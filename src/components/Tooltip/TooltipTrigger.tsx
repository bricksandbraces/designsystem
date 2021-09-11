import React, { ReactNode } from "react";
import cx from "classnames";
import { useMeasure } from "react-use";
import useControlled from "../../hooks/useControlled";

type TooltipTriggerProps = {
  /**
   * Label that is shown.
   */
  children: ReactNode;

  /**
   * DOM class names for the trigger
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

const TooltipTrigger = ({
  children,
  className,
  open,
  disabled,
  ...rest
}: TooltipTriggerProps) => {
  const controlled = useControlled(open);
  const [ref, { height }] = useMeasure();
  const calculatedHeight = `${height + 16}px`;
  const style = {
    "--tooltip-container-height": calculatedHeight
  } as React.CSSProperties;
  return (
    <div
      ref={ref}
      style={style}
      className={cx(className, "tooltip--trigger", {
        "tooltip--visible-hover": !controlled,
        "tooltip--visible": controlled && open,
        "tooltip--disabled": disabled
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TooltipTrigger;
