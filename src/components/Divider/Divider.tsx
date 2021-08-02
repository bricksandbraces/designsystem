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
   * No Margin
   */
  noMargin?: boolean;

  /**
   * Class Name
   */
  className?: string;
};

const Divider = ({ kind, noMargin, size, className }: DividerProps) => {
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
          "divider--no-margin": noMargin
        },
        className
      )}
    />
  );
};

export default Divider;
