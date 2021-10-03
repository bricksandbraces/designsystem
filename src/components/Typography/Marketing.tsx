import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type MarketingProps = {
  /**
   * React children
   */
  children?: ReactNode;

  /**
   * Type to use
   */
  type?: "m1" | "m2" | "q1" | "q2";

  /**
   * Classnames
   */
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Marketing = ({ children, className, type, ...rest }: MarketingProps) => {
  return (
    <p
      className={cx(
        `${prefix}--typography ${prefix}--typography--${type}`,
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Marketing;
