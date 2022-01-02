import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../settings";

export type AspectRatioProps = {
  /**
   * Aspect Ratio Children
   */
  children?: ReactNode;

  /**
   * Aspect Ratio Classes
   */
  ratio?: "1x1" | "2x1" | "4x3" | "16x9" | "21x9";

  /**
   * Aspect Ratio Classnames
   */
  className?: string;
};

export const AspectRatio = function AspectRatio({
  children,
  ratio,
  className,
  ...rest
}: AspectRatioProps) {
  return (
    <div
      className={cx(
        `${prefix}--aspect-ratio ${prefix}--aspect-ratio--${ratio}`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
