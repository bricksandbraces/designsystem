import { boolean, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { IconSmartHome, IconSend, IconDatabase } from "@tabler/icons";
import SideNav from "./SideNav";
import SideNavItem from "./SideNavItem";

export default { title: "SideNav", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div className="no-padding">
      <SideNav basePath="#">
        <SideNavItem
          href="#"
          renderIcon={<IconSmartHome size={20} stroke={2} />}
          label="Home &amp; Dashboard"
        />
        <SideNavItem
          href="#"
          renderIcon={<IconSend size={20} stroke={2} />}
          label="Campaigns"
        />
        <SideNavItem
          href="#"
          renderIcon={<IconDatabase size={20} stroke={2} />}
          label="Data base"
          selected={boolean("Item selected", false)}
        />
      </SideNav>
    </div>
  );
};
