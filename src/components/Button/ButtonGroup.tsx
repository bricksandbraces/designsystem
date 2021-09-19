import React, { ReactNode } from "react";
import cx from "classnames";

export type ButtonGroupProps = {
  /**
   * React Children
   */

  children: ReactNode;

  /**
   * Icon Button Divier
   */

  withDivider?: boolean;

  /**
   * ClassName
   */

  className?: string;
};

const ButtonGroup = ({
  children,
  withDivider,
  className
}: ButtonGroupProps) => (
  <div
    className={cx(
      "button--group",
      { "button--group-divider": withDivider },
      className
    )}
  >
    {children}
  </div>
);

export default ButtonGroup;
