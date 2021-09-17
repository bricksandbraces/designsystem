import React from "react";
import cx from "classnames";

export type SearchResultItemProps = {
  label: string;
  href: string;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  artificialFocus?: boolean;
};

const SearchResultItem = ({
  label,
  href,
  onMouseEnter,
  onMouseLeave,
  artificialFocus
}: SearchResultItemProps) => {
  return (
    <a
      className={cx("search--box-content__results-item", {
        "search--box-content__results-item__marked": artificialFocus
      })}
      href={href}
      tabIndex={-1}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </a>
  );
};

export default SearchResultItem;
