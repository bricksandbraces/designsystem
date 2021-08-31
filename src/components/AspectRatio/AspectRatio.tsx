import React, { ReactNode } from "react";
import cx from "classnames";

type AspectRatioProps = {
  /**
   * Aspect Ratio Children
   */
  children?: ReactNode;

  /**
   * Ratio
   */
  ratio?: "1x1" | "2x1" | "4x3" | "16x9" | "21x9";

  /**
   * Classnames
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
      className={cx(`aspect-ratio aspect-ratio--${ratio}`, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AspectRatio;
