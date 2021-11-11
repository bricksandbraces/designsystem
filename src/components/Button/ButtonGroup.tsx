import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type ButtonGroupProps = {
  /**
   * ButtonGroup Children
   */

  children: ReactNode;

  /**
   * ButtonGroup Divider
   */

  withDivider?: boolean;

  /**
   * ButtonGroup ClassName
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
      `${prefix}--button-group`,
      { [`${prefix}--button-group__divider`]: withDivider },
      className
    )}
  >
    {children}
  </div>
);

export default ButtonGroup;
