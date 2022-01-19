import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type NavigationHeaderNavLinkProps = {
  /**
   * NavigationHeaderNavLink Label
   */
  label?: string;

  /**
   * NavigationHeaderNavLink ClassName
   */
  className?: string;

  /**
   * NavigationHeaderNavLink Href
   */
  href?: string;

  /**
   * NavigationHeaderNavLink Selected
   */
  selected?: boolean;

  /**
   * NavigationHeaderNavLink OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const NavigationHeaderNavLink = React.forwardRef(
  function NavigationHeaderNavLink(
    { className, href, label, selected, ...rest }: NavigationHeaderNavLinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) {
    return (
      <a
        href={href}
        {...rest}
        className={cx(
          `${prefix}--navigation-header__nav-link`,
          { [`${prefix}--navigation-header__nav-link--selected`]: selected },
          className
        )}
        ref={ref}
      >
        {label}
      </a>
    );
  }
);
