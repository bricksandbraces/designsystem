import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../settings";

export type HeaderNavMenuItemProps = {
  /**
   * HeaderNavMenuItem Message
   */
  children?: string;

  /**
   * HeaderNavMenuItem Icon
   */
  icon?: ReactNode;

  /**
   * HeaderNavMenuItem Danger
   */
  danger?: boolean;

  /**
   * HeaderNavMenuItem Title
   */
  title?: string;

  /**
   * HeaderNavMenuItem TabIndex
   */
  tabIndex?: number;

  /**
   * HeaderNavMenuItem Href
   */
  href?: string;

  /**
   * HeaderNavMenuItem onClose Function
   */
  onClose?: (event: any) => void;

  /**
   * HeaderNavMenuItem onClick Function
   */
  onClick?: (event: any) => void;
};

export const HeaderNavMenuItem = function ({
  children,
  icon,
  danger,
  href,
  ...rest
}: HeaderNavMenuItemProps) {
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
