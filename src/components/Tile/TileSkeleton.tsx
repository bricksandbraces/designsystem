import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

export type TileSkeletonProps = {
  /**
   * TileSkeleton ClassName
   */
  className?: string;

  /**
   * TileSkeleton Light
   */
  light?: boolean;
};

const TileSkeleton = ({ light, className }: TileSkeletonProps) => (
  <SkeletonAnimatedContainer
    light={light}
    style={{ width: 128 }}
    className={cx(
      `${prefix}--tile`,

      className
    )}
  />
);

export default TileSkeleton;
