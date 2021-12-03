import React, { ReactNode } from "react";
import cx from "classnames";

import { prefix } from "../../settings";

export type NavigationProps = {
  /**
   * Navigation Children
   */
  children?: ReactNode;
};

const Navigation = (
  { children }: NavigationProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  return (
    <header className={cx(`${prefix}--navigation`)} ref={ref}>
      {children}
    </header>
  );
};

export default React.forwardRef(Navigation);
