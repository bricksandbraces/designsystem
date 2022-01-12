import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type NavigationHeaderNavProps = {
  /**
   * NavigationHeaderNav Children
   */
  children?: React.ReactNode;

  /**
   * NavigationHeaderNav ClassName
   */
  className?: string;
};

export const NavigationHeaderNav = React.forwardRef(function NavigationHeaderNav(
  { className, children, ...rest }: NavigationHeaderNavProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <nav
      {...rest}
      className={cx(`${prefix}--navigation-header__nav`, className)}
      ref={ref}
    >
      {children}
    </nav>
  );
});
