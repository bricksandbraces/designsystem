import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SkeletonAnimatedContainerProps = {
  /**
   * Children
   */
  children?: ReactNode;

  /**
   * ClassName
   */
  className?: string;

  /**
   * light
   */
  light?: boolean;

  /**
   * Width
   */
  width?: number | "100%" | "80%" | "50%";
};

const SkeletonAnimatedContainer = ({
  width,
  light,
  children,

  className
}: SkeletonAnimatedContainerProps) => {
  return (
    <div
      className={cx(
        `${prefix}--skeleton ${prefix}--skeleton-animated`,
        { [`${prefix}--skeleton-light`]: light },
        className
      )}
      style={
        typeof width === "string"
          ? { width: `${width}` }
          : { width: `${width}px` }
      }
    >
      {children}
      <div className={`${prefix}--skeleton-animated__wiper`} />
    </div>
  );
};

export default SkeletonAnimatedContainer;
