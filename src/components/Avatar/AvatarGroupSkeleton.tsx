import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";
import { AvatarGroup } from "./AvatarGroup";

export type AvatarGroupSkeletonProps = {
  /**
   * AvatarGroupSkeleton ClassName
   */
  className?: string;

  /**
   * AvatarGroupSkeleton size
   */
  size?: "large" | "default" | "small";
};

export const AvatarGroupSkeleton = function AvatarGroupSkeleton({
  size,
  className
}: AvatarGroupSkeletonProps) {
  return (
    <AvatarGroup>
      <div className={cx(`${prefix}--avatar-container`, className)}>
        <SkeletonAnimatedContainer
          className={cx(
            `${prefix}--avatar ${prefix}--avatar-${size}`,

            className
          )}
        />
      </div>
      <div className={cx(`${prefix}--avatar-container`, className)}>
        <SkeletonAnimatedContainer
          className={cx(
            `${prefix}--avatar ${prefix}--avatar-${size}`,

            className
          )}
        />
      </div>
      <div className={cx(`${prefix}--avatar-container`, className)}>
        <SkeletonAnimatedContainer
          className={cx(
            `${prefix}--avatar ${prefix}--avatar-${size}`,

            className
          )}
        />
      </div>
    </AvatarGroup>
  );
};
