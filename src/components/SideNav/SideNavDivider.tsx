import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { Divider } from "../..";

export type SideNavDividerProps = {
  /**
   * SideNavDivider ClassName
   */
  className?: string;

  /**
   * SideNavDivider FromHeader
   */
  fromHeader?: boolean;
};

const SideNavDivider = (
  { className, fromHeader }: SideNavDividerProps,
  ref: React.ForwardedRef<HTMLHRElement>
) => {
  return (
    <Divider
      type="default"
      className={cx(
        `${prefix}--sidenav-divider`,
        { [`${prefix}--sidenav-from-header`]: fromHeader },
        className
      )}
      ref={ref}
    />
  );
};

export default React.forwardRef(SideNavDivider);
