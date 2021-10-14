import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

export type CopyButtonSkeletonProps = {
  /**
   * CopyButtonSkeleton ClassName
   */
  className?: string;

  /**
   * CopyButtonSkeleton Size
   */
  size?: "large" | "default" | "small";

  /**
   * CopyButtonSkeleton Light
   */
  light?: boolean;
};

const CopyButtonSkeleton = ({
  size = "default",
  light,
  className
}: CopyButtonSkeletonProps) => (
  <SkeletonAnimatedContainer
    light={light}
    className={cx(
      `${prefix}--button-icon-only ${prefix}--button-${size}`,

      className
    )}
  />
);

export default CopyButtonSkeleton;
