import React from "react";
import cx from "classnames";
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

const SkeletonAnimatedContainer = (
  { children, className, ...rest }: SkeletonAnimatedContainerProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
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
};

export default React.forwardRef(SkeletonAnimatedContainer);
