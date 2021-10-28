import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SkeletonStaticContainerProps = {
  /**
   * SkeletonStaticContainer Children
   */
  children?: ReactNode;

  /**
   * SkeletonStaticContainer ClassName
   */
  className?: string;

  /**
   * SkeletonStaticContainer Width
   */
  width?: number | "100%" | "80%" | "50%";
};

const SkeletonStaticContainer = ({
  width,
  children,
  className
}: SkeletonStaticContainerProps) => {
  return (
    <div
      className={cx(
        `${prefix}--skeleton ${prefix}--skeleton-static`,
        className
      )}
      style={
        typeof width === "string"
          ? { width: `${width}` }
          : { width: `${width}px` }
      }
    >
      {children}
    </div>
  );
};

export default SkeletonStaticContainer;
