import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

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
    <div className={cx(className, `${prefix}--tooltip--container-body`)}>
      {children}
    </div>
  );
};

export default ContainerTooltipBody;
