import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type HeaderNavProps = {
  /**
   * HeaderNav Children
   */
  children?: React.ReactNode;

  /**
   * HeaderNav ClassName
   */
  className?: string;
};

export const HeaderNav = React.forwardRef(function HeaderNav(
  { className, children, ...rest }: HeaderNavProps,
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
