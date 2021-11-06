import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import AvatarGroup from "./AvatarGroup";

type AvatarGroupSkeletonProps = {
  /**
   * AvatarGroupSkeleton ClassName
   */
  className?: string;

  /**
   * AvatarGroupSkeleton size
   */
  size?: "large" | "default" | "small";
};

const AvatarGroupSkeleton = ({ size, className }: AvatarGroupSkeletonProps) => {
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

export default AvatarGroupSkeleton;
