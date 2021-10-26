import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type QuoteProps = {
  /**
   * Quote Children
   */
  children?: ReactNode;

  /**
   * Quote Type
   */
  type?: "quote-01" | "quote-02";

  /**
   * Quote ClassName
   */
  className?: string;
} & React.HTMLAttributes<HTMLQuoteElement>;

const Quote = ({ children, className, type, ...rest }: QuoteProps) => {
  return (
    <div
      className={cx(
        `${prefix}--typography ${prefix}--typography-blockquote ${prefix}--typography-${type}`,
        className
      )}
    >
      <p className={cx(`${prefix}--typography ${prefix}--typography-${type}`)}>
        &ldquo;
      </p>
      <blockquote
        className={cx(`${prefix}--typography ${prefix}--typography-${type}`)}
        {...rest}
      >
        {children}
      </blockquote>
    </div>
  );
};

export default Quote;
