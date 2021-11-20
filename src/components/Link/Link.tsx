import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type LinkProps = {
  /**
   * Link Children
   */
  children: ReactNode;

  /**
   * Link Location
   */
  href?: string;

  /**
   * Link Target
   */
  target?: string;

  /**
   * Link Inline
   */
  inline?: boolean;

  /**
   * Link ClassName
   */
  className?: string;

  /**
   * Link Size
   */
  size?: "large" | "small" | "default";

  /**
   * Link Icon
   */
  icon?: ReactNode;

  /**
   * Link OnClick Event
   */
  onClick?: (event: any) => void;
};

const Link = ({
  children,
  href,
  target,
  inline,
  size = "default",
  icon,
  onClick,
  className,
  ...rest
}: LinkProps) => {
  return onClick ? (
    <button
      className={cx(
        `${prefix}--link ${prefix}--link-${size}`,
        {
          [`${prefix}--link-inline`]: inline
        },
        className
      )}
      {...rest}
      onClick={onClick}
    >
      <span className={`${prefix}--link-label`}>{children}</span>
      {!inline && icon}
    </button>
  ) : (
    <a
      className={cx(
        `${prefix}--link ${prefix}--link-${size}`,
        {
          [`${prefix}--link-inline`]: inline
        },
        className
      )}
      href={href}
      target={target}
      {...rest}
    >
      <span className={`${prefix}--link-label`}>{children}</span>
      {!inline && icon}
    </a>
  );
};

export default Link;
