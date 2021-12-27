import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

export type RadioTileSkeletonProps = {
  /**
   * RadioTileSkeleton ClassName
   */
  className?: string;
};

export const RadioTileSkeleton = function RadioTileSkeleton({
  className
}: RadioTileSkeletonProps) {
  return (
    <SkeletonAnimatedContainer
      style={{ width: 128 }}
      className={cx(
        `${prefix}--radiotile ${prefix}--tile`,

        className
      )}
    />
  );
};
