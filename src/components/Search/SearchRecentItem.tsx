import { IconClock } from "@tabler/icons";
import React from "react";

export type SearchRecentItemProps = {
  label: string;
  href: string;
};

const SearchRecentItem = ({ label, href }: SearchRecentItemProps) => {
  return (
    <a className="search--box-content__recent-item" href={href} tabIndex={-1}>
      <IconClock size={16} className="search--box-content__recent-icon" />
      {label}
    </a>
  );
};

export default SearchRecentItem;
