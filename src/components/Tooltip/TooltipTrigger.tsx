import React, { ReactNode } from "react";
import cx from "classnames";
import { useMeasure } from "react-use";
import useControlled from "../../hooks/useControlled";
import { prefix } from "../../settings";

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
};

const TooltipTrigger = ({
  children,
  className,
  open,
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
      ref={ref as any}
      style={style}
      className={cx(className, `${prefix}--tooltip--trigger`, {
        [`${prefix}--tooltip--visible-onhover`]: !controlled,
        [`${prefix}--tooltip--visible`]: controlled && open
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TooltipTrigger;
