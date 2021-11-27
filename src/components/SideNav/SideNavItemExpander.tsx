import React, { useState } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { IconChevronDown } from "@tabler/icons";

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
  children?: React.ReactNode;

  /**
   * SideNavItemExpander Icon
   */
  icon: React.ReactNode;

  /**
   * SideNavItemExpander OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SideNavItemExpander = ({
  label,
  icon,
  className,
  children
}: SideNavItemExpanderProps) => {
  const [open, setOpen] = useState(false);

  // selected when collapsed but one child is selected
  const selected =
    !open &&
    React.Children.toArray(children).some(
      (child: any) => !!child.props?.selected
    );

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
            <IconChevronDown />
          </div>
        </div>
      </button>
      <div className={`${prefix}--sidenav-item__expander-list`}>{children}</div>
    </>
  );
};

export default SideNavItemExpander;
