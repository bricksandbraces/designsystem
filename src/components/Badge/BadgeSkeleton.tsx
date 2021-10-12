import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

type BadgeSkeletonProps = {
  /**
   * BadgeSkeleton ClassName
   */
  className?: string;
};

const BadgeSkeleton = ({ className }: BadgeSkeletonProps) => {
  return (
    <SkeletonAnimatedContainer
      width={64}
      className={cx(
        `${prefix}--badge`,

        className
      )}
    />
  );
};

export default BadgeSkeleton;
