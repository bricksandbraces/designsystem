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
};

const Link = ({ children, href, target, inline, ...rest }: LinkProps) => {
  return (
    <a
      className={cx("link", { "link-inline": inline })}
      href={href}
      target={target}
      {...rest}
    >
      <div className="link-label">{children}</div>
    </a>
  );
};

export default Link;
