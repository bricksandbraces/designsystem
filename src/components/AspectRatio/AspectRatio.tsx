import React, { ReactNode } from "react";
import cx from "classnames";
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

const AspectRatio = ({
  children,
  ratio,
  className,
  ...rest
}: AspectRatioProps) => {
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

export default AspectRatio;
