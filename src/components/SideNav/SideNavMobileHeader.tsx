import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";
import { IconMenu, IconX } from "@tabler/icons";

type SideNavMobileHeaderProps = {
  /**
   * SideNavMobileHeader OnClick Function
   */
  onMenuClick?: (event: any) => void;

  /**
   * SideNavMobileHeader Open
   */
  open?: boolean;
};

const SideNavMobileHeader = ({
  open,
  onMenuClick
}: SideNavMobileHeaderProps) => {
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

export default SideNavMobileHeader;
