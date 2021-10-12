import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

export type IconOnlyButtonSkeletonProps = {
  /**
   * Button ClassName
   */
  className?: string;

  /**
   * Button size
   */
  size?: "large" | "default" | "small";
};

const IconOnlyButtonSkeleton = ({
  size = "default",
  className
}: IconOnlyButtonSkeletonProps) => (
  <SkeletonAnimatedContainer
    className={cx(
      `${prefix}--button-icon-only ${prefix}--button-${size}`,

      className
    )}
  />
);

export default IconOnlyButtonSkeleton;
