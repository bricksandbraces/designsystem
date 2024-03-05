import { action } from "@storybook/addon-actions";
import {
  Icon2fa,
  IconAngle,
  IconApps,
  IconAward,
  IconBrandTinder,
  IconCash,
  IconDatabase,
  IconPlus,
  IconSearch,
  IconSend,
  IconSmartHome
} from "@tabler/icons-react";
import React, { useState } from "react";
import { Logo, SideNav } from "../..";
import { IconOnlyButton } from "../Button/IconOnlyButton";
import { SideNavDivider } from "./SideNavDivider";
import { SideNavHeadline } from "./SideNavHeadline";
import { SideNavItem } from "./SideNavItem";
import { SideNavItemExpander } from "./SideNavItemExpander";
import { SideNavMobileHeader } from "./SideNavMobileHeader";

export default {
  title: "Navigation/SideNav",
  decorators: [
    (Story: any) => (
      <div style={{ height: "100vh" }}>
        <Story />
      </div>
    )
  ]
};

export const Default = {
  render: () => {
    return (
      <SideNav
        basePath="#"
        logo={<Logo type="logotype" color="white" size="xsmall" />}
        defaultOpen
        onLogoClick={action("onLogoClick")}
      >
        <SideNavItem
          href="#"
          icon={<IconSmartHome />}
          label="Home &amp; Dashboard"
          tooltipProps={{
            tooltipContent: "Home & Dashboard"
          }}
        />
        <SideNavItem href="#" icon={<IconSend />} label="Campaigns" />
        <SideNavDivider />
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
    );
  }
};

export const DefaultWithoutIcons = {
  render: () => {
    return (
      <SideNav
        basePath="#"
        logo={<Logo type="logotype" color="white" size="xsmall" />}
        defaultOpen
        onLogoClick={action("onLogoClick")}
      >
        <SideNavItem href="#" label="Home &amp; Dashboard" />
        <SideNavItem href="#" label="Campaigns" />
        <SideNavDivider />
        <SideNavHeadline>Group 1</SideNavHeadline>
        <SideNavItem href="#" label="Data base" />
        <SideNavItem href="#" label="Search" />
        <SideNavItemExpander label="All apps">
          <SideNavItem href="#" label="Cash" />
          <SideNavItem href="#" label="Angle" selected />
          <SideNavItem href="#" label="Tinder" />
        </SideNavItemExpander>
        <SideNavItemExpander label="All apps">
          <SideNavItem href="#" label="Cash" />
          <SideNavItem href="#" label="Angle" />
          <SideNavItem href="#" label="Tinder" />
        </SideNavItemExpander>
        <SideNavDivider />
        <SideNavHeadline>Group 2</SideNavHeadline>
        <SideNavItem href="#" label="Two-factor auth" />
        <SideNavItem href="#" label="Awards" />
      </SideNav>
    );
  }
};

export const ButtonsAsItems = {
  render: () => {
    return (
      <SideNav
        logo={<Logo type="logotype" color="white" size="xsmall" />}
        defaultOpen={true}
        onLogoClick={action("onLogoClick")}
      >
        <SideNavItem icon={<IconSmartHome />} label="Home &amp; Dashboard" />
        <SideNavItem icon={<IconSend />} label="Campaigns" />
        <SideNavDivider />
        <SideNavHeadline>Group 1</SideNavHeadline>
        <SideNavItem icon={<IconDatabase />} label="Data base" />
        <SideNavItem icon={<IconSearch />} label="Search" />
        <SideNavItemExpander icon={<IconApps />} label="All apps">
          <SideNavItem label="Cash" />
          <SideNavItem label="Angle" selected />
          <SideNavItem label="Tinder" />
        </SideNavItemExpander>
        <SideNavItemExpander icon={<IconApps />} label="All apps">
          <SideNavItem label="Cash" />
          <SideNavItem label="Angle" />
          <SideNavItem label="Tinder" />
        </SideNavItemExpander>
        <SideNavHeadline>Group 2</SideNavHeadline>
        <SideNavItem icon={<Icon2fa />} label="Two-factor auth" />
        <SideNavItem icon={<IconAward />} label="Awards" />
      </SideNav>
    );
  }
};

export const WithSelection = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
      <SideNav
        logo={<Logo type="logotype" color="white" size="xsmall" />}
        defaultOpen={true}
        onLogoClick={action("onLogoClick")}
      >
        <SideNavItem
          icon={<IconSmartHome />}
          label="Home &amp; Dashboard"
          selected={selectedIndex === 0}
          onClick={() => setSelectedIndex(0)}
        />
        <SideNavDivider />
        <SideNavHeadline>Group 1</SideNavHeadline>
        <SideNavItem
          icon={<IconDatabase />}
          label="Data base"
          selected={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
        />
        <SideNavItemExpander icon={<IconApps />} label="All apps">
          <SideNavItem
            label="Cash"
            selected={selectedIndex === 2}
            onClick={() => setSelectedIndex(2)}
          />
          <SideNavItem
            label="Angle"
            selected={selectedIndex === 3}
            onClick={() => setSelectedIndex(3)}
          />
        </SideNavItemExpander>
      </SideNav>
    );
  }
};

export const WithAction = {
  args: { defaultOpen: true },
  render: (args: any) => {
    return (
      <SideNav
        basePath="#"
        defaultOpen={args.defaultOpen}
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
        />
        <SideNavItem href="#" icon={<IconSend />} label="Campaigns" />
        <SideNavDivider />
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
        <SideNavHeadline>Group 2</SideNavHeadline>
        <SideNavItem href="#" icon={<Icon2fa />} label="Two-factor auth" />
        <SideNavItem href="#" icon={<IconAward />} label="Awards" />
      </SideNav>
    );
  }
};

export const WithLogoImg = {
  args: { defaultOpen: true },
  render: (args: any) => {
    return (
      <SideNav
        basePath="#"
        defaultOpen={args.defaultOpen}
        logo={
          <img
            alt="Glyph"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hamburg-logo.svg/2000px-Hamburg-logo.svg.png"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        }
        action={<IconOnlyButton hideTooltip size="small" icon={<IconPlus />} />}
      >
        <SideNavItem
          href="#"
          icon={<IconSmartHome />}
          label="Home &amp; Dashboard"
        />
        <SideNavItem href="#" icon={<IconSend />} label="Campaigns" />
        <SideNavDivider />
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
        <SideNavHeadline>Group 2</SideNavHeadline>
        <SideNavItem href="#" icon={<Icon2fa />} label="Two-factor auth" />
        <SideNavItem href="#" icon={<IconAward />} label="Awards" />
      </SideNav>
    );
  }
};

export const WithMobileHeader = {
  args: {
    open: true
  },
  render: (args: any) => {
    const [openMenu, setOpenMenu] = useState(args.open);
    return (
      <>
        <SideNavMobileHeader
          onMenuClick={() => {
            setOpenMenu(!openMenu);
          }}
          open={openMenu}
        />
        <SideNav
          basePath="#"
          open={openMenu}
          onOpenChange={(newOpen) => setOpenMenu(newOpen)}
          logo={<Logo type="logotype" color="white" size="xsmall" />}
        >
          <SideNavItem
            href="#"
            icon={<IconSmartHome />}
            label="Home &amp; Dashboard"
          />
          <SideNavItem href="#" icon={<IconSend />} label="Campaigns" />
          <SideNavDivider />
          <SideNavHeadline>Group 1</SideNavHeadline>
          <SideNavItem href="#" icon={<IconDatabase />} label="Data base" />
          <SideNavItem href="#" icon={<IconSearch />} label="Search" />
          <SideNavItemExpander icon={<IconApps />} label="All apps">
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
      </>
    );
  }
};
