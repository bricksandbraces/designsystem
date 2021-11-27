import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonContainer from "../Skeleton/SkeletonContainer";

export type ToggleSkeletonProps = {
  /**
   * ToggleSkeleton ClassName
   */
  className?: string;

  /**
   * ToggleSkeleton Size
   */
  size?: "small" | "default";
};

const ToggleSkeleton = ({
  size = "default",
  className
}: ToggleSkeletonProps) => (
  <SkeletonContainer
    className={cx(
      `${prefix}--toggle ${prefix}--toggle-${size}`,

      className
    )}
  >
    <SkeletonAnimatedContainer className={cx(`${prefix}--toggle-switch`)} />
    <SkeletonAnimatedContainer
      style={{ width: 128 }}
      className={cx(`${prefix}--toggle`)}
    />
  </SkeletonContainer>
);

export default ToggleSkeleton;
