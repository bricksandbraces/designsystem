import React, { ReactNode } from "react";
import cx from "classnames";

type ContainerTooltipBodyProps = {
  /**
   * Label that is shown.
   */
  children: ReactNode;

  /**
   * DOM class names for the trigger
   */
  className?: string;
};

const ContainerTooltipBody = ({
  children,
  className
}: ContainerTooltipBodyProps) => {
  return (
    <div className={cx(className, "tooltip--container-body")}>{children}</div>
  );
};

export default ContainerTooltipBody;
