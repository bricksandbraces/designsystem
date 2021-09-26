import React from "react";
import cx from "classnames";

type SearchContainerProps = { open?: boolean; children: React.ReactNode };

const SearchContainer = ({ open, children }: SearchContainerProps) => {
  return (
    <div
      className={cx("search--box", {
        "search--box-open": open
      })}
    >
      {children}
    </div>
  );
};

export default SearchContainer;
