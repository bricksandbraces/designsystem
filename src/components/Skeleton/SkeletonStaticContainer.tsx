import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type SkeletonStaticContainerProps = {
  /**
   * SkeletonStaticContainer Children
   */
  children?: ReactNode;

  /**
   * SkeletonStaticContainer ClassName
   */
  className?: string;

  /**
   * SkeletonStaticContainer Inline Style
   */
  style?: React.CSSProperties;
};

const SkeletonStaticContainer = (
  { children, className, ...rest }: SkeletonStaticContainerProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      className={cx(
        `${prefix}--skeleton ${prefix}--skeleton-static`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(SkeletonStaticContainer);
