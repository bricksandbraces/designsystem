import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

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

const Label = (
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

export default React.forwardRef(Label);
