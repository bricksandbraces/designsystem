import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type MarketingProps = {
  /**
   * Aspect Ratio Children
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

  /**
   * Title
   */
  title?: string;

  /**
   * React inline styles for the typography component
   */
  style?: any;

  /**
   * HTML for label
   */
  htmlFor?: string;

  name?: string;
};

const Marketing = ({ children, className, type, ...rest }: MarketingProps) => {
  return (
    <>
      <p
        className={cx(
          `${prefix}--typography ${prefix}--typography--${type}`,
          className
        )}
        {...rest}
      >
        {children}
      </p>
    </>
  );
};

export default Marketing;
