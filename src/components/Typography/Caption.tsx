import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type CaptionProps = {
  /**
   * Caption Children
   */
  children?: React.ReactNode;

  /**
   * Caption Classnames
   */
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Caption = (
  { children, className, ...rest }: CaptionProps,
  ref: React.ForwardedRef<HTMLParagraphElement>
) => {
  return (
    <p
      className={cx(
        `${prefix}--typography ${prefix}--typography-caption`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </p>
  );
};

export default React.forwardRef(Caption);
