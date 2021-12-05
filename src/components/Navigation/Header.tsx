import React, { ReactNode } from "react";
import cx from "classnames";

import { prefix } from "../../settings";

export type HeaderProps = {
  /**
   * Header Children
   */
  children?: ReactNode;
};

const Header = (
  { children }: HeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div ref={ref} className={cx(`${prefix}--navigation-header`)}>
      {children}
    </div>
  );
};

export default React.forwardRef(Header);
