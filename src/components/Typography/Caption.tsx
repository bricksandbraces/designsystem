import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type CaptionProps = {
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

const Caption = ({ children, className, ...rest }: CaptionProps) => {
  return (
    <>
      <p
        className={cx(
          `${prefix}--typography ${prefix}--typography--caption`,
          className
        )}
        {...rest}
      >
        {children}
      </p>
    </>
  );
};

export default Caption;
