import { boolean, withKnobs } from "@storybook/addon-knobs";
import { IconNotification, IconUser } from "@tabler/icons";

import React from "react";

import Header from "./Header";
import HeaderActionItem from "./HeaderActionItem";
import HeaderAction from "./HeaderAction";
import HeaderDivider from "./HeaderDivider";
import HeaderNav from "./HeaderNav";
import HeaderNavLink from "./HeaderNavLink";
import Navigation from "./Navigation";
import HeaderNavTrigger from "./HeaderNavTrigger";

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
