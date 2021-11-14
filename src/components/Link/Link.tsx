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
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
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
  const Element = React.createElement(href ? "a" : "button").type;

  return (
    <Element
      className={cx(
        `${prefix}--link ${prefix}--link-${size}`,
        {
          [`${prefix}--link-inline`]: inline
        },
        className
      )}
      {...rest}
      href={href}
      target={target}
      onClick={onClick as React.MouseEventHandler<HTMLElement>}
    >
      <span className={`${prefix}--link-label`}>{children}</span>
      {!inline && icon}
    </Element>
  );
};

export default Link;
