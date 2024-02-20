import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import {
  Icon2fa,
  IconApps,
  IconAward,
  IconCash,
  IconDatabase,
  IconLink,
  IconNotification,
  IconSearch,
  IconSend,
  IconSettings,
  IconSmartHome,
  IconUser,
  IconUsers
} from "@tabler/icons-react";

import React, { useState } from "react";

import {
  NavigationHeader,
  NavigationHeaderAction,
  NavigationHeaderActionItem,
  NavigationHeaderDivider,
  NavigationHeaderMenuButton,
  NavigationHeaderNav,
  NavigationHeaderNavLink,
  NavigationHeaderNavMenu,
  Logo,
  Navigation,
  SideNav,
  SideNavDivider,
  SideNavHeadline,
  SideNavItem,
  SideNavItemExpander
} from "../..";
import { NavigationHeaderNavMenuItem } from "./NavigationHeaderNavMenuItem";

export default { title: "Navigation/Navigation", decorators: [withKnobs] };

export const WithNav = () => {
  return (
    <Navigation>
      <NavigationHeader>
        <NavigationHeaderNav>
          <NavigationHeaderNavLink href="#" label="Link 1" />
          <NavigationHeaderNavLink href="#" label="Link 2" />
          <NavigationHeaderNavLink href="#" label="Link 3" />
          <NavigationHeaderDivider />
          <NavigationHeaderNavLink href="#" label="Link 4" />
          <NavigationHeaderNavLink href="#" label="Link 5" />
          <NavigationHeaderDivider />
        </NavigationHeaderNav>
      </NavigationHeader>
    </Navigation>
  );
};

export const WithActions = () => {
  return (
    <Navigation>
      <NavigationHeader>
        <NavigationHeaderNav>
          <NavigationHeaderNavLink href="#" label="Link 1" />
          <NavigationHeaderNavLink href="#" label="Link 2" />
          <NavigationHeaderNavLink href="#" label="Link 3" />
          <NavigationHeaderDivider />
          <NavigationHeaderNavLink href="#" label="Link 4" />
          <NavigationHeaderNavLink href="#" label="Link 5" />
          <NavigationHeaderDivider />
        </NavigationHeaderNav>
        <NavigationHeaderAction>
          <NavigationHeaderActionItem selected>
            <IconNotification />
          </NavigationHeaderActionItem>
          <NavigationHeaderActionItem>
            <IconUser />
          </NavigationHeaderActionItem>
        </NavigationHeaderAction>
      </NavigationHeader>
    </Navigation>
  );
};

export const WithDropdown = () => {
  return (
    <Navigation>
      <NavigationHeader>
        <NavigationHeaderNav>
          <NavigationHeaderNavLink href="#" label="Link 1" />
          <NavigationHeaderNavLink href="#" label="Link 2" />
          <NavigationHeaderNavLink href="#" label="Link 3" />
          <NavigationHeaderDivider />
          <NavigationHeaderNavLink href="#" label="Link 4" />
          <NavigationHeaderNavLink href="#" label="Link 5" />
          <NavigationHeaderDivider />
          <NavigationHeaderNavMenu label="Menu">
            <NavigationHeaderNavMenuItem icon={<IconCash />}>
              Billing
            </NavigationHeaderNavMenuItem>
            <NavigationHeaderNavMenuItem icon={<IconUsers />}>
              Account
            </NavigationHeaderNavMenuItem>
            <NavigationHeaderNavMenuItem icon={<IconSettings />}>
              Settings
            </NavigationHeaderNavMenuItem>
          </NavigationHeaderNavMenu>
          <NavigationHeaderNavMenu label="Menu">
            <NavigationHeaderNavMenuItem icon={<IconCash />}>
              Billing
            </NavigationHeaderNavMenuItem>
            <NavigationHeaderNavMenuItem icon={<IconUsers />}>
              Account
            </NavigationHeaderNavMenuItem>
            <NavigationHeaderNavMenuItem icon={<IconSettings />}>
              Settings
            </NavigationHeaderNavMenuItem>
          </NavigationHeaderNavMenu>
          <NavigationHeaderDivider />
        </NavigationHeaderNav>
        <NavigationHeaderAction>
          <NavigationHeaderActionItem selected>
            <IconNotification />
          </NavigationHeaderActionItem>
          <NavigationHeaderActionItem>
            <IconUser />
          </NavigationHeaderActionItem>
        </NavigationHeaderAction>
      </NavigationHeader>
    </Navigation>
  );
};

export const WithSideNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <Navigation>
        <NavigationHeader>
          <NavigationHeaderMenuButton
            open={openMenu}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
          <NavigationHeaderNav>
            <NavigationHeaderNavLink href="#" label="Link 1" />
            <NavigationHeaderNavLink href="#" label="Link 2" />
            <NavigationHeaderNavLink href="#" label="Link 3" />
            <NavigationHeaderDivider />
            <NavigationHeaderNavLink href="#" label="Link 4" />
            <NavigationHeaderNavLink href="#" label="Link 5" />
            <NavigationHeaderDivider />
            <NavigationHeaderNavMenu label="Menu">
              <NavigationHeaderNavMenuItem icon={<IconCash />}>
                Billing
              </NavigationHeaderNavMenuItem>
              <NavigationHeaderNavMenuItem icon={<IconUsers />}>
                Account
              </NavigationHeaderNavMenuItem>
              <NavigationHeaderNavMenuItem icon={<IconSettings />}>
                Settings
              </NavigationHeaderNavMenuItem>
            </NavigationHeaderNavMenu>
            <NavigationHeaderNavMenu label="Menu">
              <NavigationHeaderNavMenuItem icon={<IconCash />}>
                Billing
              </NavigationHeaderNavMenuItem>
              <NavigationHeaderNavMenuItem icon={<IconUsers />}>
                Account
              </NavigationHeaderNavMenuItem>
              <NavigationHeaderNavMenuItem icon={<IconSettings />}>
                Settings
              </NavigationHeaderNavMenuItem>
            </NavigationHeaderNavMenu>
            <NavigationHeaderDivider />
          </NavigationHeaderNav>
          <NavigationHeaderAction>
            <NavigationHeaderActionItem>
              <IconNotification />
            </NavigationHeaderActionItem>
            <NavigationHeaderActionItem>
              <IconUser />
            </NavigationHeaderActionItem>
          </NavigationHeaderAction>
        </NavigationHeader>
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
