import { boolean, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import {
  IconSmartHome,
  IconSend,
  IconDatabase,
  IconSearch,
  IconApps,
  Icon2fa,
  IconAward,
  IconCash,
  IconAngle,
  IconBrandTinder,
  IconPlus
} from "@tabler/icons";
import SideNavItem from "./SideNavItem";
import SideNavDivider from "./SideNavDivider";
import SideNavHeadline from "./SideNavHeadline";
import SideNavItemExpander from "./SideNavItemExpander";
import { Logo } from "../..";
import IconOnlyButton from "../Button/IconOnlyButton";
import SideNavMobileHeader from "./SideNavMobileHeader";

export default { title: "Components/SideNav", decorators: [withKnobs] };

export const Uncontrolled = () => {
  return (
    <div style={{ height: "100vh" }}>
      <SideNav
        basePath="#"
        logo={<Logo type="logotype" color="white" size="xsmall" />}
        defaultOpen={true}
      >
        <SideNavItem
          href="#"
          icon={<IconSmartHome />}
          label="Home &amp; Dashboard"
          selected
        />
        <SideNavItem href="#" icon={<IconSend />} label="Campaigns" />
        <SideNavDivider />
        <SideNavHeadline>Group 1</SideNavHeadline>
        <SideNavItem href="#" icon={<IconDatabase />} label="Data base" />
        <SideNavItem href="#" icon={<IconSearch />} label="Search" />
        <SideNavItemExpander icon={<IconApps />} label="All apps" selected>
          <SideNavItem href="#" icon={<IconCash />} label="Cash" />
          <SideNavItem href="#" icon={<IconAngle />} label="Angle" selected />
          <SideNavItem href="#" icon={<IconBrandTinder />} label="Tinder" />
        </SideNavItemExpander>
        <SideNavItemExpander icon={<IconApps />} label="All apps">
          <SideNavItem href="#" icon={<IconCash />} label="Cash" />
          <SideNavItem href="#" icon={<IconAngle />} label="Angle" />
          <SideNavItem href="#" icon={<IconBrandTinder />} label="Tinder" />
        </SideNavItemExpander>
        <SideNavHeadline>Group 2</SideNavHeadline>
        <SideNavItem href="#" icon={<Icon2fa />} label="Two-factor auth" />
        <SideNavItem href="#" icon={<IconAward />} label="Awards" />
      </SideNav>
    </div>
  );
};

export const WithAction = () => {
  return (
    <div style={{ height: "100vh" }}>
      <SideNav
        basePath="#"
        open={boolean("open", false)}
        logo={<Logo type="logotype" color="white" size="xsmall" />}
        action={
          <IconOnlyButton
            kind="ghost"
            size="small"
            icon={<IconSearch />}
            hideTooltip
          />
        }
      >
        <SideNavItem
          href="#"
          icon={<IconSmartHome />}
          label="Home &amp; Dashboard"
          selected
        />
        <SideNavItem href="#" icon={<IconSend />} label="Campaigns" />
        <SideNavDivider />
        <SideNavHeadline>Group 1</SideNavHeadline>
        <SideNavItem href="#" icon={<IconDatabase />} label="Data base" />
        <SideNavItem href="#" icon={<IconSearch />} label="Search" />
        <SideNavItemExpander icon={<IconApps />} label="All apps" selected>
          <SideNavItem href="#" icon={<IconCash />} label="Cash" />
          <SideNavItem href="#" icon={<IconAngle />} label="Angle" selected />
          <SideNavItem href="#" icon={<IconBrandTinder />} label="Tinder" />
        </SideNavItemExpander>
        <SideNavItemExpander icon={<IconApps />} label="All apps">
          <SideNavItem href="#" icon={<IconCash />} label="Cash" />
          <SideNavItem href="#" icon={<IconAngle />} label="Angle" />
          <SideNavItem href="#" icon={<IconBrandTinder />} label="Tinder" />
        </SideNavItemExpander>
        <SideNavHeadline>Group 2</SideNavHeadline>
        <SideNavItem href="#" icon={<Icon2fa />} label="Two-factor auth" />
        <SideNavItem href="#" icon={<IconAward />} label="Awards" />
      </SideNav>
    </div>
  );
};

export const WithLogoImg = () => {
  return (
    <div style={{ height: "100vh" }}>
      <SideNav
        basePath="#"
        open={boolean("open", false)}
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hamburg-logo.svg/2000px-Hamburg-logo.svg.png"
        action={<IconOnlyButton hideTooltip size="small" icon={<IconPlus />} />}
      >
        <SideNavItem
          href="#"
          icon={<IconSmartHome />}
          label="Home &amp; Dashboard"
          selected
        />
        <SideNavItem href="#" icon={<IconSend />} label="Campaigns" />
        <SideNavDivider />
        <SideNavHeadline>Group 1</SideNavHeadline>
        <SideNavItem href="#" icon={<IconDatabase />} label="Data base" />
        <SideNavItem href="#" icon={<IconSearch />} label="Search" />
        <SideNavItemExpander icon={<IconApps />} label="All apps" selected>
          <SideNavItem href="#" icon={<IconCash />} label="Cash" />
          <SideNavItem href="#" icon={<IconAngle />} label="Angle" selected />
          <SideNavItem href="#" icon={<IconBrandTinder />} label="Tinder" />
        </SideNavItemExpander>
        <SideNavItemExpander icon={<IconApps />} label="All apps">
          <SideNavItem href="#" icon={<IconCash />} label="Cash" />
          <SideNavItem href="#" icon={<IconAngle />} label="Angle" />
          <SideNavItem href="#" icon={<IconBrandTinder />} label="Tinder" />
        </SideNavItemExpander>
        <SideNavHeadline>Group 2</SideNavHeadline>
        <SideNavItem href="#" icon={<Icon2fa />} label="Two-factor auth" />
        <SideNavItem href="#" icon={<IconAward />} label="Awards" />
      </SideNav>
    </div>
  );
};

export const WithMobileHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <SideNavMobileHeader
        onMenuClick={() => {
          setOpenMenu(!openMenu);
        }}
        open={openMenu}
      />
      <SideNav
        basePath="#"
        open={openMenu}
        logo={<Logo type="logotype" color="white" size="xsmall" />}
      >
        <SideNavItem
          href="#"
          icon={<IconSmartHome />}
          label="Home &amp; Dashboard"
          selected
        />
        <SideNavItem href="#" icon={<IconSend />} label="Campaigns" />
        <SideNavDivider />
        <SideNavHeadline>Group 1</SideNavHeadline>
        <SideNavItem href="#" icon={<IconDatabase />} label="Data base" />
        <SideNavItem href="#" icon={<IconSearch />} label="Search" />
        <SideNavItemExpander icon={<IconApps />} label="All apps" selected>
          <SideNavItem href="#" icon={<IconCash />} label="Cash" />
          <SideNavItem href="#" icon={<IconAngle />} label="Angle" selected />
          <SideNavItem href="#" icon={<IconBrandTinder />} label="Tinder" />
        </SideNavItemExpander>
        <SideNavItemExpander icon={<IconApps />} label="All apps">
          <SideNavItem href="#" icon={<IconCash />} label="Cash" />
          <SideNavItem href="#" icon={<IconAngle />} label="Angle" />
          <SideNavItem href="#" icon={<IconBrandTinder />} label="Tinder" />
        </SideNavItemExpander>
        <SideNavHeadline>Group 2</SideNavHeadline>
        <SideNavItem href="#" icon={<Icon2fa />} label="Two-factor auth" />
        <SideNavItem href="#" icon={<IconAward />} label="Awards" />
      </SideNav>
    </div>
  );
};
