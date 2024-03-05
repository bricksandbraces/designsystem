import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

export type IconOnlyButtonSkeletonProps = {
  /**
   * IconOnlyButtonSkeleton ClassName
   */
  className?: string;

  /**
   * IconOnlyButtonSkeleton Size
   */
  size?: "large" | "default" | "small";

  /**
   * IconOnlyButtonSkeleton Light
   */
  light?: boolean;
};

export const IconOnlyButtonSkeleton = function IconOnlyButtonSkeleton({
  size = "default",
  className
}: IconOnlyButtonSkeletonProps) {
  return (
    <SkeletonAnimatedContainer
      className={cx(
        `${prefix}--button ${prefix}--button-icon-only ${prefix}--button-${size}`,
        className
      )}
    />
  );
};
