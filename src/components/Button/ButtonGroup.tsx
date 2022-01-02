import cx from "classnames";
import React, { ReactNode } from "react";
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

export const ButtonGroup = React.forwardRef(function ButtonGroup(
  { children, withDivider, className, ...rest }: ButtonGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
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
});
