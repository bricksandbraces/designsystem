import { boolean, withKnobs } from "@storybook/addon-knobs";
import {
  Icon2fa,
  IconApps,
  IconAward,
  IconDatabase,
  IconLink,
  IconNotification,
  IconSearch,
  IconSend,
  IconSmartHome,
  IconUser
} from "@tabler/icons";

import React, { useState } from "react";

import Header from "./Header";
import HeaderActionItem from "./HeaderActionItem";
import HeaderAction from "./HeaderAction";
import HeaderDivider from "./HeaderDivider";
import HeaderNav from "./HeaderNav";
import HeaderNavLink from "./HeaderNavLink";
import Navigation from "./Navigation";
import HeaderNavTrigger from "./HeaderNavTrigger";
import { Logo, SideNav } from "../..";
import { action } from "@storybook/addon-actions";
import SideNavItem from "../SideNav/SideNavItem";
import SideNavDivider from "../SideNav/SideNavDivider";
import SideNavHeadline from "../SideNav/SideNavHeadline";
import SideNavItemExpander from "../SideNav/SideNavItemExpander";
import HeaderMenuButton from "./HeaderMenuButton";

export default { title: "Components/Navigation", decorators: [withKnobs] };

export const WithNav = () => {
  return (
    <Navigation>
      <Header>
        <HeaderNav>
          <HeaderNavLink href="#" selected>
            Link 1
          </HeaderNavLink>
          <HeaderNavLink href="#">Link 2</HeaderNavLink>
          <HeaderNavLink href="#">Link 3</HeaderNavLink>
          <HeaderDivider />
          <HeaderNavLink href="#">Link 4</HeaderNavLink>
          <HeaderNavLink href="#">Link 5</HeaderNavLink>
          <HeaderDivider />
        </HeaderNav>
      </Header>
    </Navigation>
  );
};

export const WithActions = () => {
  return (
    <Navigation>
      <Header>
        <HeaderNav>
          <HeaderNavLink href="#" selected>
            Link 1
          </HeaderNavLink>
          <HeaderNavLink href="#">Link 2</HeaderNavLink>
          <HeaderNavLink href="#">Link 3</HeaderNavLink>
          <HeaderDivider />
          <HeaderNavLink href="#">Link 4</HeaderNavLink>
          <HeaderNavLink href="#">Link 5</HeaderNavLink>
          <HeaderDivider />
        </HeaderNav>
        <HeaderAction>
          <HeaderActionItem selected>
            <IconNotification />
          </HeaderActionItem>
          <HeaderActionItem>
            <IconUser />
          </HeaderActionItem>
        </HeaderAction>
      </Header>
    </Navigation>
  );
};

export const WithDropdown = () => {
  return (
    <Navigation>
      <Header>
        <HeaderNav>
          <HeaderNavLink href="#" selected>
            Link 1
          </HeaderNavLink>
          <HeaderNavLink href="#">Link 2</HeaderNavLink>
          <HeaderNavLink href="#">Link 3</HeaderNavLink>
          <HeaderDivider />
          <HeaderNavLink href="#">Link 4</HeaderNavLink>
          <HeaderNavLink href="#">Link 5</HeaderNavLink>
          <HeaderDivider />
          <HeaderNavTrigger
            open={boolean("open", false)}
            selected={boolean("selected", false)}
          >
            Trigger 1
          </HeaderNavTrigger>
          <HeaderNavTrigger>Trigger 2</HeaderNavTrigger>
          <HeaderNavTrigger>Trigger 3</HeaderNavTrigger>
          <HeaderDivider />
        </HeaderNav>
        <HeaderAction>
          <HeaderActionItem selected>
            <IconNotification />
          </HeaderActionItem>
          <HeaderActionItem>
            <IconUser />
          </HeaderActionItem>
        </HeaderAction>
      </Header>
    </Navigation>
  );
};

export const WithSideNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <Navigation>
        <Header>
          <HeaderMenuButton
            open={openMenu}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
          <HeaderNav>
            <HeaderNavLink href="#">Link 1</HeaderNavLink>
            <HeaderNavLink href="#">Link 2</HeaderNavLink>
            <HeaderNavLink href="#">Link 3</HeaderNavLink>
            <HeaderDivider />
            <HeaderNavLink href="#">Link 4</HeaderNavLink>
            <HeaderNavLink href="#">Link 5</HeaderNavLink>
            <HeaderDivider />
            <HeaderNavTrigger>Trigger 1</HeaderNavTrigger>
            <HeaderNavTrigger>Trigger 2</HeaderNavTrigger>
            <HeaderNavTrigger>Trigger 3</HeaderNavTrigger>
            <HeaderDivider />
          </HeaderNav>
          <HeaderAction>
            <HeaderActionItem>
              <IconNotification />
            </HeaderActionItem>
            <HeaderActionItem>
              <IconUser />
            </HeaderActionItem>
          </HeaderAction>
        </Header>
        <SideNav
          logo={<Logo type="logotype" color="white" size="xsmall" />}
          onLogoClick={action("onLogoClick")}
          open={openMenu}
          onOpenChange={(newOpen) => setOpenMenu(newOpen)}
        >
          <SideNavItem
            href="#"
            icon={<IconSmartHome />}
            label="Home &amp; Dashboard"
          />
          <SideNavItem href="#" icon={<IconSend />} label="Campaigns" />
          <SideNavDivider />
          <SideNavItem href="#" icon={<IconLink />} label="Link 1" fromHeader />
          <SideNavItem href="#" icon={<IconLink />} label="Link 2" fromHeader />
          <SideNavItem href="#" icon={<IconLink />} label="Link 3" fromHeader />
          <SideNavDivider fromHeader />
          <SideNavItem href="#" icon={<IconLink />} label="Link 4" fromHeader />
          <SideNavItem href="#" icon={<IconLink />} label="Link 5" fromHeader />
          <SideNavDivider fromHeader />
          <SideNavItemExpander icon={<IconApps />} label="Trigger 1" fromHeader>
            <SideNavItem href="#" label="Link 1" fromHeader />
            <SideNavItem href="#" label="Link 2" fromHeader />
            <SideNavItem href="#" label="Link 3" fromHeader />
          </SideNavItemExpander>
          <SideNavItemExpander icon={<IconApps />} label="Trigger 2" fromHeader>
            <SideNavItem href="#" label="Link 1" fromHeader />
            <SideNavItem href="#" label="Link 2" fromHeader />
            <SideNavItem href="#" label="Link 3" fromHeader />
          </SideNavItemExpander>
          <SideNavItemExpander icon={<IconApps />} label="Trigger 3" fromHeader>
            <SideNavItem href="#" label="Link 1" fromHeader />
            <SideNavItem href="#" label="Link 2" fromHeader />
            <SideNavItem href="#" label="Link 3" fromHeader />
          </SideNavItemExpander>
          <SideNavDivider fromHeader />
          <SideNavHeadline>Group 1</SideNavHeadline>
          <SideNavItem href="#" icon={<IconDatabase />} label="Data base" />
          <SideNavItem href="#" icon={<IconSearch />} label="Search" />
          <SideNavItemExpander icon={<IconApps />} label="All apps">
            <SideNavItem href="#" label="Cash" />
            <SideNavItem href="#" label="Angle" selected />
            <SideNavItem href="#" label="Tinder" />
          </SideNavItemExpander>
          <SideNavItemExpander icon={<IconApps />} label="All apps">
            <SideNavItem href="#" label="Cash" />
            <SideNavItem href="#" label="Angle" />
            <SideNavItem href="#" label="Tinder" />
          </SideNavItemExpander>
          <SideNavDivider />
          <SideNavHeadline>Group 2</SideNavHeadline>
          <SideNavItem href="#" icon={<Icon2fa />} label="Two-factor auth" />
          <SideNavItem href="#" icon={<IconAward />} label="Awards" />
        </SideNav>
      </Navigation>
    </div>
  );
};
