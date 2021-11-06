import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type DividerProps = {
  /**
   * Divider Kind
   */
  type?: "default" | "subtle" | "harsh";

  /**
   * Divider ClassName
   */
  className?: string;
};

const Divider = ({ type = "default", className }: DividerProps) => {
  return (
    <hr
      className={cx(
        `${prefix}--divider ${prefix}--divider-${type}`,

        className
      )}
    />
  );
};

export default Divider;
