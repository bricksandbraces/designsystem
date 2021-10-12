import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonText from "../Skeleton/SkeletonText";

export type ButtonSkeletonProps = {
  /**
   * Button ClassName
   */
  className?: string;

  /**
   * Button size
   */
  size?: "large" | "default" | "small";
};

const ButtonSkeleton = ({
  size = "default",
  className
}: ButtonSkeletonProps) => (
  <SkeletonAnimatedContainer
    width={128}
    className={cx(
      `${prefix}--button-${size}`,

      className
    )}
  >
    <SkeletonText size="small" width="100%" />
  </SkeletonAnimatedContainer>
);

export default ButtonSkeleton;
