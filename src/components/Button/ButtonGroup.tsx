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

const ButtonGroup = (
  { children, withDivider, className, ...rest }: ButtonGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => (
  <div
    className={cx(
      `${prefix}--button-group`,
      { [`${prefix}--button-group__divider`]: withDivider },
      className
    )}
    {...rest}
    ref={ref}
  >
    {children}
  </div>
);

export default ButtonGroup;
