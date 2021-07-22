import React, { ReactNode } from "react";
import cx from "classnames";

type LinkProps = {
  /**
   * Children that are shown.
   */
  children: ReactNode;

  /**
   * Link location .
   */
  href: string;

  /**
   * Location target .
   */
  target?: string;

  /**
   * Inline link .
   */
  inline?: boolean;

  /**
   * React className
   */
  className?: string;
};

const Link = ({
  children,
  href,
  target,
  inline,
  className,
  ...rest
}: LinkProps) => {
  return (
    <a
      className={cx("link", { "link--inline": inline }, className)}
      href={href}
      target={target}
      {...rest}
    >
      <div className="link--label">{children}</div>
    </a>
  );
};

export default Link;
