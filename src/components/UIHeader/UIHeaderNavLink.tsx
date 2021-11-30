import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";

export type UIHeaderNavLinkProps = {
  /**
   * UIHeaderNavLink Children
   */
  children?: React.ReactNode;

  /**
   * UIHeaderNavLink ClassName
   */
  className?: string;

  /**
   * UIHeaderNavLink Href
   */
  href?: string;

  /**
   * UIHeaderNavLink Selected
   */
  selected?: boolean;

  /**
   * UIHeaderNavLink OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const UIHeaderNavLink = (
  { className, href, children, selected, ...rest }: UIHeaderNavLinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => {
  return (
    <a
      href={href}
      {...rest}
      className={cx(
        `${prefix}--uiheader-nav__link`,
        { [`${prefix}--uiheader-nav__link-selected`]: selected },
        className
      )}
      ref={ref}
    >
      {children}
    </a>
  );
};

export default React.forwardRef(UIHeaderNavLink);
