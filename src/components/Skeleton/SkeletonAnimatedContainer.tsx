import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type SkeletonAnimatedContainerProps = {
  /**
   * SkeletonAnimatedContainer Children
   */
  children?: React.ReactNode;

  /**
   * SkeletonAnimatedContainer ClassName
   */
  className?: string;

  /**
   * SkeletonAnimatedContainer InlineStyle
   */
  style?: React.CSSProperties;
};

export const SkeletonAnimatedContainer = React.forwardRef(
  function SkeletonAnimatedContainer(
    { children, className, ...rest }: SkeletonAnimatedContainerProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div
        className={cx(
          `${prefix}--skeleton ${prefix}--skeleton-animated`,
          className
        )}
        {...rest}
        ref={ref}
      >
        {children}
        <div className={`${prefix}--skeleton-animated__wiper`} />
      </div>
    );
  }
);
