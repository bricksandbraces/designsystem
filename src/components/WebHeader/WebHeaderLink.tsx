import React, { ReactNode } from "react";
import { prefix } from "../../settings";
import cx from "classnames";

type WebHeaderLinkProps = {
  /**
   * WebHeaderLink Children
   */
  children?: ReactNode;

  /**
   * WebHeaderLink ClassName
   */
  className?: string;

  /**
   * WebHeaderLink Href
   */
  href?: string;

  /**
   * WebHeaderLink OnClick Function
   */
  onClick?: (event: any) => void;
};

const WebHeaderLink = ({
  className,
  href,
  children,
  ...rest
}: WebHeaderLinkProps) => {
  return (
    <a
      href={href}
      {...rest}
      className={cx(`${prefix}--webheader-link`, className)}
    >
      {children}
    </a>
  );
};

export default WebHeaderLink;
