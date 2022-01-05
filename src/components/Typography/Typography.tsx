import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type HeadlineProps = {
  /**
   * Headline React children
   */
  children?: React.ReactNode;

  /**
   * Headline Type to use
   */
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * Headline Classnames
   */
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export type BodyProps = {
  /**
   * Body Children
   */
  children?: React.ReactNode;

  /**
   * Body Type
   */
  type?: "body-01" | "body-02";

  /**
   * Body ClassName
   */
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export type LabelProps = {
  /**
   * Label Children
   */
  children?: React.ReactNode;

  /**
   * Label ClassName
   */
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export type CaptionProps = {
  /**
   * Caption Children
   */
  children?: React.ReactNode;

  /**
   * Caption Classnames
   */
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

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

export type MarketingProps = {
  /**
   * Marketing Children
   */
  children?: React.ReactNode;

  /**
   * Marketing Type
   */
  type?: "marketing-01" | "marketing-02";

  /**
   * Marketing ClassnName
   */
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const HeadlineComponent = (
  { children, className, type = "h1", ...rest }: HeadlineProps,
  ref: React.ForwardedRef<HTMLHeadElement>
) => {
  const Element: any = React.createElement(type).type;
  return (
    <Element
      className={cx(
        `${prefix}--typography ${prefix}--typography-${type}`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </Element>
  );
};

const BodyComponent = (
  { children, className, type = "body-01", ...rest }: BodyProps,
  ref: React.ForwardedRef<HTMLParagraphElement>
) => {
  return (
    <p
      className={cx(
        `${prefix}--typography ${prefix}--typography-${type}`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </p>
  );
};

const LabelComponent = (
  { children, className, ...rest }: LabelProps,
  ref: React.ForwardedRef<HTMLLabelElement>
) => {
  return (
    <label
      className={cx(
        `${prefix}--typography ${prefix}--typography-label`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </label>
  );
};

const CaptionComponent = (
  { children, className, ...rest }: CaptionProps,
  ref: React.ForwardedRef<HTMLParagraphElement>
) => {
  return (
    <p
      className={cx(
        `${prefix}--typography ${prefix}--typography-caption`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </p>
  );
};

const QuoteComponent = (
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
          <h6 className={cx(`${prefix}--typography-blockquote__name`)}>
            {name}
          </h6>
        )}
        {position && (
          <p className={cx(`${prefix}--typography-blockquote__position`)}>
            {position}
          </p>
        )}

        {company && (
          <p className={cx(`${prefix}--typography-blockquote__company`)}>
            {company}
          </p>
        )}
      </div>
    </div>
  );
};

const MarketingComponent = (
  { children, className, type, ...rest }: MarketingProps,
  ref: React.ForwardedRef<HTMLParagraphElement>
) => {
  return (
    <p
      className={cx(
        `${prefix}--typography ${prefix}--typography-${type}`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </p>
  );
};

export const Headline = React.forwardRef(HeadlineComponent);
export const Body = React.forwardRef(BodyComponent);
export const Label = React.forwardRef(LabelComponent);
export const Caption = React.forwardRef(CaptionComponent);
export const Marketing = React.forwardRef(MarketingComponent);
export const Quote = React.forwardRef(QuoteComponent);
