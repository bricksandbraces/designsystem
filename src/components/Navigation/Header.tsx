import cx from "classnames";
import React from "react";

import { prefix } from "../../settings";

export type HeaderProps = {
  /**
   * Header Children
   */
  children: React.ReactNode;
};

export const Header = React.forwardRef(function Header(
  { children }: HeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div ref={ref} className={cx(`${prefix}--navigation-header`)}>
      {children}
    </div>
  );
});
