import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type FloatingPanelProps = {
  /**
   * FloatingPanel ClassName
   */
  className?: string;

  /**
   * FloatingPanel Children
   */
  children: ReactNode;

  /**
   * FloatingPanel Style
   */
  style?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

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
