import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type LabelProps = {
  /**
   * React children
   */
  children?: ReactNode;

  /**
   * Classnames
   */
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, className, ...rest }: LabelProps) => {
  return (
    <label
      className={cx(
        `${prefix}--typography ${prefix}--typography--label`,
        className
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;
