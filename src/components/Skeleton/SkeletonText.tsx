import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type SkeletonTextProps = {
  /**
   * SkeletonText ClassName
   */
  className?: string;

  /**
   * SkeletonText InlineStyle
   */
  style?: React.CSSProperties;

  /**
   * SkeletonText Size
   */
  size?: "large" | "default" | "small";
};

const SkeletonText = (
  { style, size = "default", className, ...rest }: SkeletonTextProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      className={cx(
        `${prefix}--skeleton-text ${prefix}--skeleton-text__${size}`,
        className
      )}
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(SkeletonText);
