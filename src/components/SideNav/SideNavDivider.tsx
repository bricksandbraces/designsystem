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

export const SideNavDivider = React.forwardRef(function SideNavDivider(
  { className, fromHeader }: SideNavDividerProps,
  ref: React.ForwardedRef<HTMLHRElement>
) {
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
});
