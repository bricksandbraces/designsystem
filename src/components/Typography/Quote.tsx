import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import Headline from "./Headline";
import Body from "./Body";

export type QuoteProps = {
  /**
   * Quote Children
   */
  children?: React.ReactNode;

  /**
   * Quote Type
   */
  type?: "quote-01" | "quote-02";

  /**
   * Quote Name
   */
  name?: string;

  /**
   * Quote Position
   */
  position?: string;

  /**
   * Quote Company
   */
  company?: string;

  /**
   * Quote ClassName
   */
  className?: string;
} & React.HTMLAttributes<HTMLQuoteElement>;

const Quote = (
  { children, name, position, company, className, type, ...rest }: QuoteProps,
  ref: React.ForwardedRef<HTMLQuoteElement>
) => {
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
      <div className={cx(`${prefix}--typography-blockquote__container`)}>
        <blockquote
          className={cx(`${prefix}--typography ${prefix}--typography-${type}`)}
          {...rest}
          ref={ref}
        >
          {children}
        </blockquote>
        {name && (
          <Headline
            type="h6"
            className={cx(`${prefix}--typography-blockquote__name`)}
          >
            {name}
          </Headline>
        )}
        {position && (
          <Body
            type="body-02"
            className={cx(`${prefix}--typography-blockquote__position`)}
          >
            {position}
          </Body>
        )}

        {company && (
          <Body
            type="body-02"
            className={cx(`${prefix}--typography-blockquote__company`)}
          >
            {company}
          </Body>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(Quote);
