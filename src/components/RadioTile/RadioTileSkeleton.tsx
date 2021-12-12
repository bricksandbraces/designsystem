import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

export type RadioTileSkeletonProps = {
  /**
   * RadioTileSkeleton ClassName
   */
  className?: string;
};

const RadioTileSkeleton = ({ className }: RadioTileSkeletonProps) => (
  <SkeletonAnimatedContainer
    style={{ width: 128 }}
    className={cx(
      `${prefix}--radiotile ${prefix}--tile`,

      className
    )}
  />
);

export default RadioTileSkeleton;
