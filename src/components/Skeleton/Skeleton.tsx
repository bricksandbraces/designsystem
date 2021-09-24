import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SkeletonProps = {
  /**
   * Overlay anzeigen?
   */
  circle?: boolean;

  /**
   * ClassName
   */
  className?: string;

  /**
   * Size
   */
  size?: "small" | "default" | "large";
};

const Skeleton = ({ size = "default", circle, className }: SkeletonProps) => {
  return (
    <div
      className={cx(
        `${prefix}--skeleton ${prefix}--skeleton--${size}`,
        { [`${prefix}--skeleton--circle`]: circle },
        className
      )}
    />
  );
};

export default Skeleton;
