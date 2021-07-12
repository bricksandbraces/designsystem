import React, { ReactNode } from "react";
import cx from "classnames";

type SideNavItemProps = {
  /**
   * Href for link
   */
  href: string;

  /**
   * label for link
   */
  label: string;

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
  onClick
}: SideNavItemProps) => {
  return (
    <>
      {href !== undefined ? (
        <a
          href={href}
          className={cx("sidenav-item", { "sidenav-item--selected": selected })}
        >
          <div className="sidenav-item--icon">{renderIcon}</div>
          <div className="sidenav-item--label">{label}</div>
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cx("sidenav-item", { "sidenav-item--selected": selected })}
        >
          <div className="sidenav-item--icon">{renderIcon}</div>
          <div className="sidenav-item--label">{label}</div>
        </button>
      )}
    </>
  );
};

export default SideNavItem;
