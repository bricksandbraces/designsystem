import React from "react";

export type SearchResultItemProps = {
  label: string;
  href: string;
};

const SearchResultItem = ({ label, href }: SearchResultItemProps) => {
  return (
    <a className="search--box-content__results-item" href={href} tabIndex={-1}>
      {label}
    </a>
  );
};

export default SearchResultItem;
