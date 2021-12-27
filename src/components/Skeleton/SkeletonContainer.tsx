import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../settings";

export type SkeletonContainerProps = {
  /**
   * SkeletonContainer Children
   */
  children?: ReactNode;

  /**
   * SkeletonContainer ClassName
   */
  className?: string;

  /**
   * SkeletonContainer Style
   */
  style?: React.CSSProperties;
};

export const SkeletonContainer = React.forwardRef(function SkeletonContainer(
  { children, className, ...rest }: SkeletonContainerProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cx(
        `${prefix}--skeleton ${prefix}--skeleton-container`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </div>
  );
});
