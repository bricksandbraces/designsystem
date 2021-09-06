import React, { ChangeEvent, useEffect, useState } from "react";
import { IconClock, IconSearch, IconX } from "@tabler/icons";
import cx from "classnames";
import Button from "../Button/Button";
import useControlled from "../../hooks/useControlled";
import Badge from "../Badge/Badge";

type SearchInputInputProps = {
  /**
   * SearchInput size
   */
  size?: "large" | "small" | "default";

  /**
   * SearchInput id
   */
  id: string;

  /**
   * SearchInput label
   */
  label: string;

  /**
   * SearchInput placeholder
   */
  placeholder?: string;

  /**
   * SearchInput Value
   */
  value?: string;

  /**
   * Clear Button Label
   */
  clearLabel?: string;

  /**
   * SearchInput Button Label
   */
  searchLabel?: string;

  /**
   * Default Value
   */
  defaultValue?: string;

  /**
   * Show SearchInput Results
   */
  showResults?: boolean;

  /**
   * SearchInput Results
   */
  searchResultItems?: SearchInputResultItem[];

  /**
   * SearchInput Recent
   */
  searchRecentItems?: SearchInputRecentItem[];

  /**
   * SearchInput Badges
   */
  searchBadgeItems?: SearchInputBadgeItem[];

  /**
   * OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * onSearch Function
   */
  onSearch?: (event: any) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
};

const SearchInput = ({
  id,
  value,
  clearLabel = "Clear search results",
  searchLabel = "Go!",
  label = "Search",
  size = "default",
  placeholder = "Search",
  defaultValue,
  showResults,
  onSearch,
  onFocus,
  onBlur,
  onChange
}: SearchInputProps) => {
  const controlled = useControlled(value);
  const [textValue, setTextValue] = useState<string>(
    (controlled ? value : defaultValue) ?? ""
  );

  useEffect(() => {
    if (controlled) {
      setTextValue(value ?? "");
    }
  }, [value]);
  return (
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
        onFocus={onFocus}
        onBlur={onBlur}
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
  );
};

export default SearchInput;
