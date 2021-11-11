import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SideNavProps = {
  /**
   * SideNav Children
   */
  children: ReactNode;

  /**
   * SideNav Action
   */
  action?: ReactNode;

  /**
   * SideNav Logo
   */
  logo: ReactNode | SVGElement | string;

  /**
   * SideNav Basepath
   */
  basePath: string;
};

const SideNav = ({ action, logo, children, basePath }: SideNavProps) => {
  return (
    <div className={cx(`${prefix}--sidenav`)}>
      <div className={cx(`${prefix}--sidenav-head`)}>
        <a href={basePath} className={cx(`${prefix}--sidenav-logo`)}>
          {typeof logo === "string" ? <img alt="Logo" src={`${logo}`} /> : logo}
        </a>
        {action}
      </div>
      {children}
    </div>
  );
};

export default SideNav;
