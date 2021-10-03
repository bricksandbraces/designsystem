import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type HeadlineProps = {
  /**
   * React children
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
} & React.HTMLAttributes<HTMLHeadingElement>;

const Headline = ({
  children,
  className,
  type = "h1",
  ...rest
}: HeadlineProps) => {
  const Element: any = React.createElement(type).type;
  return (
    <Element
      className={cx(
        `${prefix}--typography ${prefix}--typography--${type}`,
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Headline;
