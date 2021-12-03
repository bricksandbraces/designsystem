import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";

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

const HeaderNav = (
  { className, children, ...rest }: HeaderNavProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  return (
    <nav
      {...rest}
      className={cx(`${prefix}--navigation-header__nav`, className)}
      ref={ref}
    >
      {children}
    </nav>
  );
};

export default React.forwardRef(HeaderNav);
