import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

type BadgeSkeletonProps = {
  /**
   * BadgeSkeleton ClassName
   */
  className?: string;

  /**
   * BadgeSkeleton InlineStyle. Width defaults to 64
   */
  style?: React.CSSProperties;
};

const BadgeSkeleton = ({ className, style }: BadgeSkeletonProps) => {
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

export default BadgeSkeleton;
