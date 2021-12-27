import cx from "classnames";
import React from "react";
import { Divider } from "../..";
import { prefix } from "../../settings";

export type HeaderDividerProps = {
  /**
   * HeaderDividerProps ClassName
   */
  className?: string;
};

export const HeaderDivider = React.forwardRef(function HeaderDivider(
  { className }: HeaderDividerProps,
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
