import React, { ReactNode } from "react";
import cx from "classnames";

type ContainerTooltipFooterProps = {
  /**
   * Label that is shown.
   */
  children: ReactNode;

  /**
   * DOM class names for the trigger
   */
  className?: string;
};

const ContainerTooltipFooter = ({
  children,
  className
}: ContainerTooltipFooterProps) => {
  return (
    <div className={cx(className, "tooltip--container-footer")}>{children}</div>
  );
};

export default ContainerTooltipFooter;
