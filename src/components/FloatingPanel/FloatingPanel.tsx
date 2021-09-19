import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type FloatingPanelProps = {
  /**
   * ClassName
   */
  className?: string;

  /**
   * React Children
   */
  children: ReactNode;
};

const FloatingPanel = ({
  className,
  children,
  ...rest
}: FloatingPanelProps) => {
  return (
    <div className={cx(`${prefix}--floatingpanel`, className)} {...rest}>
      {children}
    </div>
  );
};

export default FloatingPanel;
