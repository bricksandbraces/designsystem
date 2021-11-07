import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

type AvatarSkeletonProps = {
  /**
   * AvatarSkeleton ClassName
   */
  className?: string;

  /**
   * AvatarSkeleton size
   */
  size?: "large" | "default" | "small";
};

const AvatarSkeleton = ({ size, className }: AvatarSkeletonProps) => {
  return (
    <SkeletonAnimatedContainer
      className={cx(
        `${prefix}--avatar ${prefix}--avatar-${size}`,

        className
      )}
    />
  );
};

export default AvatarSkeleton;
