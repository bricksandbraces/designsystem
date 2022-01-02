import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type HeaderNavLinkProps = {
  /**
   * HeaderNavLink Label
   */
  label?: string;

  /**
   * HeaderNavLink ClassName
   */
  className?: string;

  /**
   * HeaderNavLink Href
   */
  href?: string;

  /**
   * HeaderNavLink Selected
   */
  selected?: boolean;

  /**
   * HeaderNavLink OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const HeaderNavLink = React.forwardRef(function HeaderNavLink(
  { className, href, label, selected, ...rest }: HeaderNavLinkProps,
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
});
