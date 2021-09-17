import { IconClock } from "@tabler/icons";
import cx from "classnames";
import React from "react";

export type SearchRecentItemProps = {
  label: string;
  href: string;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;

  artificialFocus?: boolean;
};

const SearchRecentItem = ({
  label,
  href,
  onMouseEnter,
  onMouseLeave,
  artificialFocus
}: SearchRecentItemProps) => {
  return (
    <a
      className={cx("search--box-content__recent-item", {
        "search--box-content__recent-item__marked": artificialFocus
      })}
      href={href}
      tabIndex={-1}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <IconClock size={16} className="search--box-content__recent-icon" />
      {label}
    </a>
  );
};

export default SearchRecentItem;
