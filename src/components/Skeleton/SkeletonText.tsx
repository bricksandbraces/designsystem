import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SkeletonTextProps = {
  /**
   * SkeletonText ClassName
   */
  className?: string;

  /**
   * SkeletonText Width
   */
  width?: number | "100%" | "80%" | "50%";

  /**
   * SkeletonText Size
   */
  size?: "large" | "default" | "small";
};

const SkeletonText = ({
  width,
  size = "default",
  className
}: SkeletonTextProps) => {
  return (
    <div
      className={cx(
        `${prefix}--skeleton-text ${prefix}--skeleton-text__${size}`,
        className
      )}
      style={
        typeof width === "string"
          ? { width: `${width}` }
          : { width: `${width}px` }
      }
    />
  );
};

export default SkeletonText;
