import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type BodyProps = {
  /**
   * React children
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
} & React.HTMLAttributes<HTMLParagraphElement>;

const Body = ({ children, className, type, ...rest }: BodyProps) => {
  return (
    <p
      className={cx(
        `${prefix}--typography ${prefix}--typography--${type}`,
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Body;
