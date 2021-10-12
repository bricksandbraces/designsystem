import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SkeletonStaticContainerProps = {
  /**
   * Children
   */
  children?: ReactNode;

  /**
   * ClassName
   */
  className?: string;

  /**
   * Width
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
