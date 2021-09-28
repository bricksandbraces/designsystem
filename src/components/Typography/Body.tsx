import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type BodyProps = {
  /**
   * Aspect Ratio Children
   */
  children?: ReactNode;

  /**
   * Type to use
   */
  type?: "b1" | "b2";

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

const Body = ({ children, className, type, ...rest }: BodyProps) => {
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

export default Body;
