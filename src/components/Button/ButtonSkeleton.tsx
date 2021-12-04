import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonContainer from "../Skeleton/SkeletonContainer";
import SkeletonText from "../Skeleton/SkeletonText";

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
  <SkeletonContainer
    className={cx(`${prefix}--button ${prefix}--button-${size}`, className)}
  >
    <SkeletonText style={{ width: "8rem" }} />
  </SkeletonContainer>
);

export default ButtonSkeleton;
