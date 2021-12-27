import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

export type AvatarSkeletonProps = {
  /**
   * AvatarSkeleton ClassName
   */
  className?: string;

  /**
   * AvatarSkeleton size
   */
  size?: "large" | "default" | "small";
};

export const AvatarSkeleton = function AvatarSkeleton({
  size,
  className
}: AvatarSkeletonProps) {
  return (
    <SkeletonAnimatedContainer
      className={cx(
        `${prefix}--avatar ${prefix}--avatar-${size}`,

        className
      )}
    />
  );
};
