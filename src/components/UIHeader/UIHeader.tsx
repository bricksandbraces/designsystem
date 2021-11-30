import React, { ReactNode } from "react";
import cx from "classnames";

import { prefix } from "../../settings";

export type UIHeaderProps = {
  /**
   * UIHeader Children
   */
  children?: ReactNode;
};

const UIHeader = (
  { children }: UIHeaderProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  return (
    <header className={cx(`${prefix}--uiheader-container`)} ref={ref}>
      <div className={cx(`${prefix}--uiheader`)}>{children}</div>
    </header>
  );
};

export default React.forwardRef(UIHeader);
