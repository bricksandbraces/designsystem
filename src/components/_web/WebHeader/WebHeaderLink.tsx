import React from "react";
import { prefix } from "../../../settings";
import cx from "classnames";

export type WebHeaderLinkProps = {
  /**
   * WebHeaderLink Children
   */
  children?: React.ReactNode;

  /**
   * WebHeaderLink ClassName
   */
  className?: string;

  /**
   * WebHeaderLink Href
   */
  href?: string;

  /**
   * WebHeaderLink OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const WebHeaderLink = React.forwardRef(function WebHeaderLink(
  { className, href, children, ...rest }: WebHeaderLinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <a
      href={href}
      {...rest}
      className={cx(`${prefix}--webheader-link`, className)}
      ref={ref}
    >
      {children}
    </a>
  );
});
