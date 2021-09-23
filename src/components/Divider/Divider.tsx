import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type DividerProps = {
  /**
   * HR kind
   */
  kind?: "default" | "subtle" | "explicit";

  /**
   * HR Size
   */
  size?: "default" | "thin" | "thicker" | "thick";

  /**
   * Margin
   */
  margin?: boolean;

  /**
   * Class Name
   */
  className?: string;
};

const Divider = ({ kind, margin = true, size, className }: DividerProps) => {
  return (
    <hr
      className={cx(
        `${prefix}--divider`,
        {
          [`${prefix}--divider--default`]:
            kind === "default" || kind === undefined,
          [`${prefix}--divider--thin`]: size === "thin" || kind === undefined,
          [`${prefix}--divider--thicker`]: size === "thicker",
          [`${prefix}--divider--thick`]: size === "thick",
          [`${prefix}--divider--subtle`]: kind === "subtle",
          [`${prefix}--divider--explicit`]: kind === "explicit",
          [`${prefix}--divider--margin`]: margin
        },
        className
      )}
    />
  );
};

export default Divider;
