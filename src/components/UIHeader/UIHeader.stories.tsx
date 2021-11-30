import { withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { UserProfile } from "../..";

import UIHeader from "./UIHeader";
import UIHeaderDivider from "./UIHeaderDivider";
import UIHeaderNav from "./UIHeaderNav";
import UIHeaderNavLink from "./UIHeaderNavLink";

export default { title: "Components/UIHeader", decorators: [withKnobs] };

export const DefaultUncontrolled = () => {
  return (
    <UIHeader>
      <UIHeaderNav>
        <UIHeaderNavLink href="#" selected>
          Link 1
        </UIHeaderNavLink>
        <UIHeaderNavLink href="#">Link 2</UIHeaderNavLink>
        <UIHeaderNavLink href="#">Link 3</UIHeaderNavLink>
        <UIHeaderDivider />
        <UIHeaderNavLink href="#">Link 4</UIHeaderNavLink>
        <UIHeaderNavLink href="#">Link 5</UIHeaderNavLink>
        <UIHeaderDivider />
      </UIHeaderNav>
      <UserProfile />
    </UIHeader>
  );
};
