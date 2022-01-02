import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

export type ButtonSkeletonProps = {
  /**
   * ButtonSkeleton ClassName
   */
  className?: string;

  /**
   * ButtonSkeleton Size
   */
  size?: "large" | "default" | "small";

  /**
   * ButtonSkeleton Light
   */
  light?: boolean;
};

export const ButtonSkeleton = React.forwardRef(function ButtonSkeleton({
  size = "default",
  className
}: ButtonSkeletonProps) {
  return (
    <SkeletonAnimatedContainer
      style={{ width: "8rem" }}
      className={cx(`${prefix}--button ${prefix}--button-${size}`, className)}
    />
  );
});
