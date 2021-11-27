import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type DividerProps = {
  /**
   * Divider Type
   */
  type?: "default" | "subtle" | "harsh";

  /**
   * Divider ClassName
   */
  className?: string;
};

const Divider = (
  { type = "default", className }: DividerProps,
  ref: React.ForwardedRef<HTMLHRElement>
) => {
  return (
    <hr
      className={cx(
        `${prefix}--divider ${prefix}--divider-${type}`,

        className
      )}
      ref={ref}
    />
  );
};

export default React.forwardRef(Divider);
