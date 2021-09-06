import React, { ChangeEvent, useEffect, useState, ReactNode } from "react";
import { IconClock, IconSearch, IconX } from "@tabler/icons";
import cx from "classnames";
import Button from "../Button/Button";
import useControlled from "../../hooks/useControlled";
import Badge from "../Badge/Badge";

type SearchRecentItem = {
  /**
   * Search Recent Item label
   */
  label: string;

  /**
   * Search Recent Item Href
   */
  href: string;
};

type SearchBadgeItem = {
  /**
   * Search Badge Item label
   */
  label: string;
};

type SearchResultItem = {
  /**
   * Search Result Item label
   */
  label: string;

  /**
   * Search Result Item Href
   */
  href: string;
};

type SearchProps = {
  /**
   * Children
   */
  children?: ReactNode;

  /**
   * Open search box
   */
  open?: boolean;

  /**
   * Show Search Results
   */
  showResults?: boolean;

  /**
   * Search Results
   */
  searchResultItems?: SearchResultItem[];

  /**
   * Search Recent
   */
  searchRecentItems?: SearchRecentItem[];

  /**
   * Search Badges
   */
  searchBadgeItems?: SearchBadgeItem[];
};

const Search = ({
  children,
  open,
  showResults,
  searchResultItems,
  searchRecentItems,
  searchBadgeItems
}: SearchProps) => {
  return (
    <div
      className={cx("search--box", {
        "search--box-open": showResults && open
      })}
    >
      {children}
      <div className="search--box-content">
        {searchBadgeItems && (
          <div className="search--box-content__badges">
            {searchBadgeItems.map((item, i) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <Badge key={i} onClick={() => {}} colorType="warm-gray">
                  {item.label}
                </Badge>
              );
            })}
          </div>
        )}
        {textValue === ""
          ? searchRecentItems && (
              <div className="search--box-content__recent">
                {searchRecentItems.map((item, i) => {
                  return (
                    <a
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className="search--box-content__recent-item"
                      href={item.href}
                    >
                      <IconClock
                        size={16}
                        className="search--box-content__recent-icon"
                      />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            )
          : searchResultItems && (
              <div className="search--box-content__results">
                {searchResultItems.map((item, i) => {
                  return (
                    <a
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className="search--box-content__results-item"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            )}
      </div>
    </div>
  );
};

export default Search;
