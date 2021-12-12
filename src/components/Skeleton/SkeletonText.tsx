import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "./SkeletonAnimatedContainer";

export type SkeletonTextProps = {
  /**
   * SkeletonText ClassName
   */
  className?: string;

  /**
   * SkeletonText InlineStyle
   */
  style?: React.CSSProperties;
};

const SkeletonText = (
  { className, ...rest }: SkeletonTextProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <SkeletonAnimatedContainer
      className={cx(`${prefix}--skeleton-text`, className)}
      ref={ref}
      {...rest}
    />
  );
};

export default React.forwardRef(SkeletonText);
