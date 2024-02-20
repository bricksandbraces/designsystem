import { IconMenu, IconX } from "@tabler/icons-react";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { IconOnlyButton } from "../Button/IconOnlyButton";

export type SideNavMobileHeaderProps = {
  /**
   * SideNavMobileHeader OnClick Function
   */
  onMenuClick?: (event: any) => void;

  /**
   * SideNavMobileHeader Open
   */
  open?: boolean;
};

export const SideNavMobileHeader = function SideNavMobileHeader({
  open,
  onMenuClick
}: SideNavMobileHeaderProps) {
  return (
    <div className={cx(`${prefix}--sidenav-mobileheader`)}>
      <IconOnlyButton
        kind="ghost"
        icon={open ? <IconX /> : <IconMenu />}
        hideTooltip
        size="small"
        onClick={onMenuClick}
      />
    </div>
  );
};
