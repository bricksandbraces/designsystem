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
  light,
  className
}: ButtonSkeletonProps) => (
  <SkeletonAnimatedContainer
    light={light}
    style={{ width: 128 }}
    className={cx(
      `${prefix}--button-${size}`,

      className
    )}
  />
);

export default ButtonSkeleton;
