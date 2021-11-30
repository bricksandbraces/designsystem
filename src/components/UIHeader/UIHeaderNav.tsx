import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";

export type UIHeaderNavProps = {
  /**
   * UIHeaderNav Children
   */
  children?: React.ReactNode;

  /**
   * UIHeaderNav ClassName
   */
  className?: string;

  /**
   * UIHeaderNav Selected
   */
  selected?: boolean;

  /**
   * UIHeaderNav OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const UIHeaderNav = (
  { className, children, selected, ...rest }: UIHeaderNavProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => {
  return (
    <nav
      {...rest}
      className={cx(`${prefix}--uiheader-nav`, className)}
      ref={ref}
    >
      {children}
    </nav>
  );
};

export default React.forwardRef(UIHeaderNav);
