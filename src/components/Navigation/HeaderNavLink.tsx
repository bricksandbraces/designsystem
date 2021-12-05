import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";

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

const HeaderNavLink = (
  { className, href, label, selected, ...rest }: HeaderNavLinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => {
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
};

export default React.forwardRef(HeaderNavLink);
