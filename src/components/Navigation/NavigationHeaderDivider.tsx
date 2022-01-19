import cx from "classnames";
import React from "react";
import { Divider } from "../..";
import { prefix } from "../../settings";

export type NavigationHeaderDividerProps = {
  /**
   * NavigationHeaderDividerProps ClassName
   */
  className?: string;
};

export const NavigationHeaderDivider = React.forwardRef(function NavigationHeaderDivider(
  { className }: NavigationHeaderDividerProps,
  ref: React.ForwardedRef<HTMLHRElement>
) {
  return (
    <Divider
      type="default"
      className={cx(`${prefix}--navigation-header__divider`, className)}
      ref={ref}
    />
  );
});
