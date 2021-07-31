import React, { ReactNode } from "react";
import cx from "classnames";

type TypographyProps = {
  /**
   * Aspect Ratio Children
   */
  children?: ReactNode;

  /**
   * Type to use
   */
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "text" | "span";

  /**
   * token to use
   */
  token?:
    | "footnote"
    | "label"
    | "body"
    | "body-small"
    | "heading-01"
    | "heading-02"
    | "heading-03"
    | "heading-04"
    | "heading-05"
    | "heading-06"
    | "display-01"
    | "display-02";

  /**
   * Classnames
   */
  className?: string;

  /**
   * React inline styles for the typography component
   */
  style?: any;
};

const Typography = ({
  children,
  className,
  type,
  token,
  ...rest
}: TypographyProps) => {
  return (
    <>
      {type === "h1" && (
        <h1
          className={cx(`typography typography--${token}`, className)}
          {...rest}
        >
          {children}
        </h1>
      )}
      {type === "h2" && (
        <h2
          className={cx(`typography typography--${token}`, className)}
          {...rest}
        >
          {children}
        </h2>
      )}
      {type === "h3" && (
        <h3
          className={cx(`typography typography--${token}`, className)}
          {...rest}
        >
          {children}
        </h3>
      )}
      {type === "h4" && (
        <h4
          className={cx(`typography typography--${token}`, className)}
          {...rest}
        >
          {children}
        </h4>
      )}
      {type === "h5" && (
        <h5
          className={cx(`typography typography--${token}`, className)}
          {...rest}
        >
          {children}
        </h5>
      )}
      {type === "h6" && (
        <h6
          className={cx(`typography typography--${token}`, className)}
          {...rest}
        >
          {children}
        </h6>
      )}
      {type === "text" && (
        <div
          className={cx(`typography typography--${token}`, className)}
          {...rest}
        >
          {children}
        </div>
      )}
      {type === "span" && (
        <span
          className={cx(`typography typography--${token}`, className)}
          {...rest}
        >
          {children}
        </span>
      )}
    </>
  );
};

export default Typography;
