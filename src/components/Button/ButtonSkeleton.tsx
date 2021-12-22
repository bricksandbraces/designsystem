import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

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

const ButtonSkeleton = ({
  size = "default",
  className
}: ButtonSkeletonProps) => (
  <SkeletonAnimatedContainer
    style={{ width: "8rem" }}
    className={cx(`${prefix}--button ${prefix}--button-${size}`, className)}
  />
);

export default ButtonSkeleton;
