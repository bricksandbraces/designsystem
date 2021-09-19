import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type LinkProps = {
  /**
   * Children that are shown.
   */
  children: ReactNode;

  /**
   * Link location .
   */
  href?: string;

  /**
   * Location target .
   */
  target?: string;

  /**
   * Inline link .
   */
  inline?: boolean;

  /**
   * Inherit size e.g. from Typography component .
   */
  inheritSize?: boolean;

  /**
   * React className
   */
  className?: string;

  /**
   * OnClick Event
   */
  onClick?: (event: any) => void;
};

const Link = ({
  children,
  href,
  target,
  inline,
  inheritSize,
  onClick,
  className,
  ...rest
}: LinkProps) => {
  return onClick ? (
    <button
      className={cx(
        `${prefix}--link`,
        {
          [`${prefix}--link--inline`]: inline,
          [`${prefix}--link--inherit`]: inheritSize
        },
        className
      )}
      {...rest}
      onClick={onClick}
    >
      <div className={`${prefix}--link--label`}>{children}</div>
    </button>
  ) : (
    <a
      className={cx(
        `${prefix}--link`,
        {
          [`${prefix}--link--inline`]: inline,
          [`${prefix}--link--inherit`]: inheritSize
        },
        className
      )}
      href={href}
      target={target}
      {...rest}
    >
      <div className={`${prefix}--link--label`}>{children}</div>
    </a>
  );
};

export default Link;
