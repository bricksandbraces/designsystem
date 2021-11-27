import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { Divider } from "../..";

export type SideNavDividerProps = {
  /**
   * SideNavDividerProps ClassName
   */
  className?: string;
};

const SideNavDivider = (
  { className }: SideNavDividerProps,
  ref: React.ForwardedRef<HTMLHRElement>
) => {
  return (
    <Divider
      type="default"
      className={cx(`${prefix}--sidenav-divider`, className)}
      ref={ref}
    />
  );
};

export default React.forwardRef(SideNavDivider);
