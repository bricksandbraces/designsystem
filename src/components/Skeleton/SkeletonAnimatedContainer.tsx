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
   * SkeletonAnimatedContainer Light
   */
  light?: boolean;

  /**
   * SkeletonAnimatedContainer InlineStyle
   */
  style?: React.CSSProperties;
};

const SkeletonAnimatedContainer = (
  { light, children, className, ...rest }: SkeletonAnimatedContainerProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      className={cx(
        `${prefix}--skeleton ${prefix}--skeleton-animated`,
        { [`${prefix}--skeleton-light`]: light },
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
