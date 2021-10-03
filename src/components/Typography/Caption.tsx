import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type CaptionProps = {
  /**
   * React children
   */
  children?: ReactNode;

  /**
   * Classnames
   */
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Caption = ({ children, className, ...rest }: CaptionProps) => {
  return (
    <p
      className={cx(
        `${prefix}--typography ${prefix}--typography--caption`,
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Caption;
