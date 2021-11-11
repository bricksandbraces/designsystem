import React from "react";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

type SideNavHeadlineProps = {
  /**
   * SideNavHeadline Children
   */
  children: string;
};

const SideNavHeadline = ({ children }: SideNavHeadlineProps) => {
  return (
    <div className={`${prefix}--sidenav-headline`}>
      <Label>{children}</Label>
    </div>
  );
};

export default SideNavHeadline;
