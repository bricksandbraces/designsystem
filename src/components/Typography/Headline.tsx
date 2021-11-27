import React from "react";
import cx from "classnames";
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

const Headline = (
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

export default React.forwardRef(Headline);
