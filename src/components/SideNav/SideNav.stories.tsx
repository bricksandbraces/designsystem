import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
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
import SideNav from "./SideNav";
import SideNavItem from "./SideNavItem";
import SideNavDivider from "./SideNavDivider";
import SideNavHeadline from "./SideNavHeadline";
import SideNavItemExpander from "./SideNavItemExpander";
import { Button, Logo } from "../..";
import IconOnlyButton from "../Button/IconOnlyButton";

export default { title: "Components/SideNav", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ height: "100vh" }}>
      <SideNav
        basePath="#"
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

export const WithAction = () => {
  return (
    <div style={{ height: "100vh" }}>
      <SideNav
        basePath="#"
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
