import React from "react";
import cx from "classnames";

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
        `skeleton skeleton--${size}`,
        { "skeleton--circle": circle },
        className
      )}
    />
  );
};

export default Skeleton;
