import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import Headline from "./Headline";
import Body from "./Body";

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
   * Quote Headline
   */
  headline?: string;

  /**
   * Quote SubHeadline
   */
  subHeadline?: string;

  /**
   * Quote ClassName
   */
  className?: string;
} & React.HTMLAttributes<HTMLQuoteElement>;

const Quote = ({
  children,
  headline,
  subHeadline,
  className,
  type,
  ...rest
}: QuoteProps) => {
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
        >
          {children}
        </blockquote>
        {headline && (
          <Headline
            type="h6"
            className={cx(`${prefix}--typography-blockquote__headline`)}
          >
            {headline}
          </Headline>
        )}
        {subHeadline && (
          <Body
            type="body-02"
            className={cx(`${prefix}--typography-blockquote__subheadline`)}
          >
            {subHeadline}
          </Body>
        )}
      </div>
    </div>
  );
};

export default Quote;
