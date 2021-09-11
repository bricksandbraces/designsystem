import React, { ReactNode } from "react";
import cx from "classnames";

type ContainerTooltipHeaderProps = {
  /**
   * Label that is shown.
   */
  children: ReactNode;

  /**
   * DOM class names for the trigger
   */
  className?: string;
};

const ContainerTooltipHeader = ({
  children,
  className
}: ContainerTooltipHeaderProps) => {
  return (
    <div className={cx(className, "tooltip--container-header")}>{children}</div>
  );
};

export default ContainerTooltipHeader;
