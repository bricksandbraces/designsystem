import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SkeletonTextProps = {
  /**
   * ClassName
   */
  className?: string;

  /**
   * Width
   */
  width?: number | "100%" | "80%" | "50%";

  /**
   * Size
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
