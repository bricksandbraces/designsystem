import cx from "classnames";
import React from "react";
import { prefix } from "../../../settings";

export type HeaderLinkProps = {
  /**
   * HeaderLink Children
   */
  children?: React.ReactNode;

  /**
   * HeaderLink ClassName
   */
  className?: string;

  /**
   * HeaderLink Href
   */
  href?: string;

  /**
   * HeaderLink OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const HeaderLink = React.forwardRef(function HeaderLink(
  { className, href, children, ...rest }: HeaderLinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <a
      href={href}
      {...rest}
      className={cx(`${prefix}--header-link`, className)}
      ref={ref}
    >
      {children}
    </a>
  );
});
