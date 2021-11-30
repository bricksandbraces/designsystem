import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { Divider } from "../..";

export type UIHeaderDividerProps = {
  /**
   * UIHeaderDividerProps ClassName
   */
  className?: string;
};

const UIHeaderDivider = (
  { className }: UIHeaderDividerProps,
  ref: React.ForwardedRef<HTMLHRElement>
) => {
  return (
    <Divider
      type="default"
      className={cx(`${prefix}--uiheader-divider`, className)}
      ref={ref}
    />
  );
};

export default React.forwardRef(UIHeaderDivider);
