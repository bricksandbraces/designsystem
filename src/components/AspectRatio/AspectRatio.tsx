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
      className={cx(
        "ratio",
        {
          "ratio-1x1": ratio === "1x1",
          "ratio-2x1": ratio === "2x1",
          "ratio-4x3": ratio === "4x3",
          "ratio-16x9": ratio === "16x9",
          "ratio-21x9": ratio === "21x9"
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AspectRatio;
