import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type BodyProps = {
  /**
   * Body Children
   */
  children?: ReactNode;

  /**
   * Body Type
   */
  type?: "body-01" | "body-02";

  /**
   * Body ClassName
   */
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Body = ({ children, className, type = "b1", ...rest }: BodyProps) => {
  return (
    <p
      className={cx(
        `${prefix}--typography ${prefix}--typography-${type}`,
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Body;
