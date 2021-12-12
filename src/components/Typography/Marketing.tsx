import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type MarketingProps = {
  /**
   * Marketing Children
   */
  children?: ReactNode;

  /**
   * Marketing Type
   */
  type?: "marketing-01" | "marketing-02";

  /**
   * Marketing ClassnName
   */
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Marketing = (
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

export default React.forwardRef(Marketing);
