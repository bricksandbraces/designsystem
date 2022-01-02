import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../settings";

export type OverflowMenuItemProps = {
  /**
   * OverflowMenuItem Message
   */
  children?: string;

  /**
   * OverflowMenuItem Icon
   */
  icon?: ReactNode;

  /**
   * OverflowMenuItem Danger
   */
  danger?: boolean;

  /**
   * OverflowMenuItem Title
   */
  title?: string;

  /**
   * OverflowMenuItem TabIndex
   */
  tabIndex?: number;

  /**
   * OverflowMenuItem Href
   */
  href?: string;

  /**
   * OverflowMenuItem onClose Function
   */
  onClose?: (event: any) => void;

  /**
   * OverflowMenuItem onClick Function
   */
  onClick?: (event: any) => void;
};

export const OverflowMenuItem = function ({
  children,
  icon,
  danger,
  href,
  ...rest
}: OverflowMenuItemProps) {
  const classes = cx(`${prefix}--overflowmenu-item`, {
    [`${prefix}--overflowmenu-item__danger`]: danger
  });
  return (
    <>
      {href ? (
        <a href={href} title={children} className={classes} {...rest}>
          <div>
            <p>{children}</p>
            {icon}
          </div>
        </a>
      ) : (
        <button
          aria-label={children}
          title={children}
          type="button"
          className={classes}
          {...rest}
        >
          <div>
            <p>{children}</p>
            {icon}
          </div>
        </button>
      )}
    </>
  );
};
