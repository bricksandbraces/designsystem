import React, { ReactNode, useState } from "react";
import cx from "classnames";
import { IconArrowNarrowRight } from "@tabler/icons";
import Logo from "../Logo/Logo";
import UserProfile from "../UserProfile/UserProfile";
import SideNavItem from "./SideNavItem";
import { prefix } from "../../settings";

type SideNavProps = {
  /**
   * Children to render
   */
  children: ReactNode;

  /**
   * Basepath to home
   */
  basePath: string;
};

const SideNav = ({ children, basePath }: SideNavProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cx(`${prefix}--sidenav`, {
        [`${prefix}--sidenav--open`]: open
      })}
    >
      <SideNavItem
        href={basePath}
        label="Bark"
        renderIcon={<Logo kind="logomark" size="xsmall" variant="white" />}
        className={`${prefix}--sidenav--logo`}
      />

      <SideNavItem
        onClick={() => {
          setOpen(!open);
        }}
        renderIcon={
          <IconArrowNarrowRight
            size={20}
            color="white"
            stroke={2}
            strokeLinejoin="miter"
            className={cx(`${prefix}--sidenav--menuicon`, {
              [`${prefix}--sidenav--menuicon-open`]: open
            })}
          />
        }
      />
      <hr className={`${prefix}--sidenav--divider`} />
      <div className={`${prefix}--sidenav--items`}>{children}</div>
      <p className={`${prefix}--sidenav--appinfo`}>
        &#169; 2021 BRICKS &amp; BRACES BARK
        <br />
        v.0.1 Release 1
      </p>
      <div className={`${prefix}--sidenav--user`}>
        <UserProfile
          name="Hendrik Ulbrich"
          subName="@hendrikU"
          onLogout={() => {}}
          links={[
            { href: "#", label: "User profile" },
            { href: "#", label: "Settings" },
            { href: "#", label: "FAQ" }
          ]}
          imgUrl="https://media-exp3.licdn.com/dms/image/C4D03AQEbx-TmQ9JFsQ/profile-displayphoto-shrink_200_200/0/1595233386946?e=1629331200&v=beta&t=sqAMMqBOm1K8Xe5N5kP3g1Loxt0UsD4QmmNeOal_V6s"
        />
      </div>
    </div>
  );
};

export default SideNav;
