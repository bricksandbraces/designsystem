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
   * BadgeSkeleton width. Defaults to 64
   */
  width?: number;
};

const BadgeSkeleton = ({ className, width = 64 }: BadgeSkeletonProps) => {
  return (
    <SkeletonAnimatedContainer
      width={width}
      className={cx(
        `${prefix}--badge`,

        className
      )}
    />
  );
};

export default BadgeSkeleton;
