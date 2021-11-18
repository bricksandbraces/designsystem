import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type OverflowMenuItemProps = {
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

const OverflowMenuItem = ({
  children,
  tabIndex,
  icon,
  danger,
  href,
  onClick
}: OverflowMenuItemProps) => {
  return (
    <>
      {onClick ? (
        <button
          aria-label={children}
          title={children}
          type="button"
          tabIndex={tabIndex}
          className={cx(`${prefix}--overflowmenu-item`, {
            [`${prefix}--overflowmenu-item__danger`]: danger
          })}
        >
          <div>
            <p>{children}</p>
            {icon}
          </div>
        </button>
      ) : (
        <a
          href={href}
          title={children}
          tabIndex={tabIndex}
          className={cx(`${prefix}--overflowmenu-item`, {
            [`${prefix}--overflowmenu-item__danger`]: danger
          })}
        >
          <div>
            <p>{children}</p>
            {icon}
          </div>
        </a>
      )}
    </>
  );
};

export default OverflowMenuItem;
