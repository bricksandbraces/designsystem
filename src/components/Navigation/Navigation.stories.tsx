import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
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

import {
  Header,
  HeaderAction,
  HeaderActionItem,
  HeaderDivider,
  HeaderMenuButton,
  HeaderNav,
  HeaderNavLink,
  HeaderNavTrigger,
  Logo,
  Navigation,
  SideNav,
  SideNavDivider,
  SideNavHeadline,
  SideNavItem,
  SideNavItemExpander
} from "../..";

export default { title: "Components/Navigation", decorators: [withKnobs] };

export const WithNav = () => {
  return (
    <Navigation>
      <Header>
        <HeaderNav>
          <HeaderNavLink href="#" label="Link 1" />
          <HeaderNavLink href="#" label="Link 2" />
          <HeaderNavLink href="#" label="Link 3" />
          <HeaderDivider />
          <HeaderNavLink href="#" label="Link 4" />
          <HeaderNavLink href="#" label="Link 5" />
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
          <HeaderNavLink href="#" label="Link 1" />
          <HeaderNavLink href="#" label="Link 2" />
          <HeaderNavLink href="#" label="Link 3" />
          <HeaderDivider />
          <HeaderNavLink href="#" label="Link 4" />
          <HeaderNavLink href="#" label="Link 5" />
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
          <HeaderNavLink href="#" label="Link 1" />
          <HeaderNavLink href="#" label="Link 2" />
          <HeaderNavLink href="#" label="Link 3" />
          <HeaderDivider />
          <HeaderNavLink href="#" label="Link 4" />
          <HeaderNavLink href="#" label="Link 5" />
          <HeaderDivider />
          <HeaderNavTrigger label="Trigger 1" />
          <HeaderNavTrigger label="Trigger 2" />
          <HeaderNavTrigger label="Trigger 3" />
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
            <HeaderNavLink href="#" label="Link 1" />
            <HeaderNavLink href="#" label="Link 2" />
            <HeaderNavLink href="#" label="Link 3" />
            <HeaderDivider />
            <HeaderNavLink href="#" label="Link 4" />
            <HeaderNavLink href="#" label="Link 5" />
            <HeaderDivider />
            <HeaderNavTrigger label="Trigger 1" />
            <HeaderNavTrigger label="Trigger 2" />
            <HeaderNavTrigger label="Trigger 3" />
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
