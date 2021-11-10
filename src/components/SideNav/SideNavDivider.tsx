import React from "react";
import { prefix } from "../../settings";
import { Divider } from "../..";

type SideNavDividerProps = {};

const SideNavDivider = ({}: SideNavDividerProps) => {
  return <Divider type="default" className={`${prefix}--sidenav-divider`} />;
};

export default SideNavDivider;
