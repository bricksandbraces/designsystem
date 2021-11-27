import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type BodyProps = {
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

const Body = (
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

export default React.forwardRef(Body);
