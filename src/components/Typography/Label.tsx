import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type LabelProps = {
  /**
   * Aspect Ratio Children
   */
  children?: ReactNode;

  /**
   * Classnames
   */
  className?: string;

  /**
   * Title
   */
  title?: string;

  /**
   * React inline styles for the typography component
   */
  style?: any;

  /**
   * HTML for label
   */
  htmlFor?: string;

  name?: string;
};

const Label = ({ children, className, ...rest }: LabelProps) => {
  return (
    <>
      <p
        className={cx(
          `${prefix}--typography ${prefix}--typography--label`,
          className
        )}
        {...rest}
      >
        {children}
      </p>
    </>
  );
};

export default Label;
