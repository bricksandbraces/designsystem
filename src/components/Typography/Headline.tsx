import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type HeadlineProps = {
  /**
   * Aspect Ratio Children
   */
  children?: ReactNode;

  /**
   * Type to use
   */
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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

const Headline = ({ children, className, type, ...rest }: HeadlineProps) => {
  return (
    <>
      {type === "h1" && (
        <h1
          className={cx(
            `${prefix}--typography ${prefix}--typography--${type}`,
            className
          )}
          {...rest}
        >
          {children}
        </h1>
      )}
      {type === "h2" && (
        <h2
          className={cx(
            `${prefix}--typography ${prefix}--typography--${type}`,
            className
          )}
          {...rest}
        >
          {children}
        </h2>
      )}
      {type === "h3" && (
        <h3
          className={cx(
            `${prefix}--typography ${prefix}--typography--${type}`,
            className
          )}
          {...rest}
        >
          {children}
        </h3>
      )}
      {type === "h4" && (
        <h4
          className={cx(
            `${prefix}--typography ${prefix}--typography--${type}`,
            className
          )}
          {...rest}
        >
          {children}
        </h4>
      )}
      {type === "h5" && (
        <h5
          className={cx(
            `${prefix}--typography ${prefix}--typography--${type}`,
            className
          )}
          {...rest}
        >
          {children}
        </h5>
      )}
      {type === "h6" && (
        <h6
          className={cx(
            `${prefix}--typography ${prefix}--typography--${type}`,
            className
          )}
          {...rest}
        >
          {children}
        </h6>
      )}
    </>
  );
};

export default Headline;
