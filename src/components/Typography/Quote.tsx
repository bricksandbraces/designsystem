import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type QuoteProps = {
  /**
   * Aspect Ratio Children
   */
  children?: ReactNode;

  /**
   * Type to use
   */
  type?: "q1" | "q2";

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

const Quote = ({ children, className, type, ...rest }: QuoteProps) => {
  return (
    <div
      className={cx(
        `${prefix}--typography ${prefix}--typography--blockquote ${prefix}--typography--${type}`,
        className
      )}
    >
      <p
        className={cx(
          `${prefix}--typography ${prefix}--typography--${type}`,
          className
        )}
      >
        &ldquo;
      </p>
      <blockquote
        className={cx(
          `${prefix}--typography ${prefix}--typography--${type}`,
          className
        )}
        {...rest}
      >
        {children}
      </blockquote>
    </div>
  );
};

export default Quote;
