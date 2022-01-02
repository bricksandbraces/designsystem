import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

export type BadgeSkeletonProps = {
  /**
   * BadgeSkeleton ClassName
   */
  className?: string;

  /**
   * BadgeSkeleton InlineStyle. Width defaults to 64
   */
  style?: React.CSSProperties;
};

export const BadgeSkeleton = function BadgeSkeleton({
  className,
  style
}: BadgeSkeletonProps) {
  return (
    <SkeletonAnimatedContainer
      style={{ width: 64, ...style }}
      className={cx(
        `${prefix}--badge`,

        className
      )}
    />
  );
};
