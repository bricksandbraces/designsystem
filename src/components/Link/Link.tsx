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
  onClick,
  className,
  ...rest
}: LinkProps) => {
  return onClick ? (
    <button
      className={cx("link", { "link--inline": inline }, className)}
      {...rest}
      onClick={onClick}
    >
      <div className="link--label">{children}</div>
    </button>
  ) : (
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
