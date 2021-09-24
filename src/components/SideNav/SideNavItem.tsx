import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SideNavItemProps = {
  /**
   * Href for link
   */
  href?: string;

  /**
   * label for link
   */
  label?: string;

  /**
   * ClassName
   */
  className?: string;

  /**
   * icon that is shown
   */
  renderIcon: ReactNode;

  /**
   * Selected state
   */
  selected?: boolean;

  /**
   * OnClick function
   */
  onClick?: (event: any) => void;
};

const SideNavItem = ({
  href,
  label,
  renderIcon,
  selected,
  className,
  onClick
}: SideNavItemProps) => {
  return (
    <>
      {href !== undefined ? (
        <a
          href={href}
          className={cx(
            `${prefix}--sidenav--item`,
            {
              [`${prefix}--sidenav--item-selected`]: selected
            },
            className
          )}
        >
          <div className={`${prefix}--sidenav--item-icon`}>{renderIcon}</div>
          <div className={`${prefix}--sidenav--item-label`}>{label}</div>
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cx(`${prefix}--sidenav--item`, {
            [`${prefix}--sidenav--item-selected`]: selected
          })}
        >
          <div className={`${prefix}--sidenav--item-icon`}>{renderIcon}</div>
          <div className={`${prefix}--sidenav--item-label`}>{label}</div>
        </button>
      )}
    </>
  );
};

export default SideNavItem;
