import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type SearchContainerProps = { open?: boolean; children: React.ReactNode };

const SearchContainer = ({ open, children }: SearchContainerProps) => {
  return (
    <div
      className={cx(`${prefix}--search-box`, {
        [`${prefix}--search-box__open`]: open
      })}
    >
      {children}
    </div>
  );
};

export default SearchContainer;
