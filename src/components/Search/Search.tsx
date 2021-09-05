import React, { ChangeEvent, useEffect, useState } from "react";
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
   * Search size
   */
  size?: "large" | "small" | "default";

  /**
   * Search id
   */
  id: string;

  /**
   * Search label
   */
  label: string;

  /**
   * Search placeholder
   */
  placeholder?: string;

  /**
   * Search Value
   */
  value?: string;

  /**
   * Clear Button Label
   */
  clearLabel?: string;

  /**
   * Search Button Label
   */
  searchLabel?: string;

  /**
   * Default Value
   */
  defaultValue?: string;

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

  /**
   * OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * onSearch Function
   */
  onSearch?: (event: any) => void;
};

const Search = ({
  id,
  value,
  clearLabel = "Clear search results",
  searchLabel = "Go!",
  label = "Search",
  size = "default",
  placeholder = "Search",
  defaultValue,
  showResults,
  searchResultItems,
  searchRecentItems,
  searchBadgeItems,
  onSearch,
  onChange
}: SearchProps) => {
  const controlled = useControlled(value);
  const [textValue, setTextValue] = useState<string>(
    (controlled ? value : defaultValue) ?? ""
  );

  const [searchboxOpen, setSearchboxOpen] = useState(textValue !== "");
  useEffect(() => {
    if (controlled) {
      setTextValue(value ?? "");
    }
  }, [value]);
  return (
    <div
      className={cx("search--box", {
        "search--box-open": showResults && searchboxOpen
      })}
    >
      <div
        role="search"
        aria-labelledby={`${id}-search`}
        className={cx(`search search--${size}`)}
      >
        <label id={`${id}-search`} htmlFor={id} className="search--label">
          {label}
        </label>
        <input
          role="searchbox"
          onFocus={() => {
            setSearchboxOpen(true);
          }}
          onBlur={() => {
            setSearchboxOpen(textValue !== "");
          }}
          autoComplete="off"
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (!controlled) {
              setTextValue(event.target.value);
            }
            onChange?.(event);
          }}
          className="search--input"
          id={id}
          placeholder={placeholder}
          value={textValue}
        />
        <div className="search--buttons">
          {textValue !== "" && (
            <Button
              onClick={() => {
                setTextValue("");
              }}
              kind="ghost"
              size={size}
              iconOnly
              renderIcon={<IconX />}
              className="search--close"
              type="button"
              aria-label={clearLabel}
            />
          )}
          <Button
            onClick={onSearch}
            iconOnly={!searchLabel}
            renderIcon={<IconSearch />}
            kind="primary"
            size={size}
            className="search--go"
            type="button"
            aria-label={searchLabel}
          >
            {searchLabel}
          </Button>
        </div>
      </div>
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
