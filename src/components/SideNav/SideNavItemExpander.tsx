import React, { ReactNode, useState } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { IconChevronRight } from "@tabler/icons";

type SideNavItemExpanderProps = {
  /**
   * SideNavItemExpander Href
   */
  href?: string;

  /**
   * SideNavItemExpander Label
   */
  label?: string;

  /**
   * SideNavItemExpander ClassName
   */
  className?: string;

  /**
   * SideNavItemExpander Children
   */
  children?: ReactNode;

  /**
   * SideNavItemExpander Icon
   */
  icon: ReactNode;

  /**
   * SideNavItemExpander Selected
   */
  selected?: boolean;

  /**
   * SideNavItemExpander OnClick Function
   */
  onClick?: (event: any) => void;
};

const SideNavItemExpander = ({
  label,
  icon,
  selected,
  className,
  children
}: SideNavItemExpanderProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className={cx(
          `${prefix}--sidenav-item ${prefix}--sidenav-item__expander`,
          {
            [`${prefix}--sidenav-item__selected`]: selected,
            [`${prefix}--sidenav-item__expander-open`]: open
          },
          className
        )}
      >
        <div className={`${prefix}--sidenav-item__icon`}>{icon}</div>
        <div className={`${prefix}--sidenav-item__container`}>
          <div className={`${prefix}--sidenav-item__label`}>{label}</div>
          <div className={`${prefix}--sidenav-item__chevron`}>
            <IconChevronRight />
          </div>
        </div>
      </button>
      <div className={`${prefix}--sidenav-item__expander-list`}>{children}</div>
    </>
  );
};

export default SideNavItemExpander;
