import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type MarketingProps = {
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

const Marketing = ({ children, className, type, ...rest }: MarketingProps) => {
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

export default Marketing;
