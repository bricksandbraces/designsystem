import React from "react";
import cx from "classnames";

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
        "divider",
        {
          "divider--default": kind === "default" || kind === undefined,
          "divider--thin": size === "thin" || kind === undefined,
          "divider--thicker": size === "thicker",
          "divider--thick": size === "thick",
          "divider--subtle": kind === "subtle",
          "divider--explicit": kind === "explicit",
          "divider--margin": margin
        },
        className
      )}
    />
  );
};

export default Divider;
