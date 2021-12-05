import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

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

const IconOnlyButtonSkeleton = ({
  size = "default",
  className
}: IconOnlyButtonSkeletonProps) => (
  <SkeletonAnimatedContainer
    className={cx(
      `${prefix}--button ${prefix}--button-icon-only ${prefix}--button-${size}`,
      className
    )}
  />
);

export default IconOnlyButtonSkeleton;
