import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { IconSearch, IconX } from "@tabler/icons";
import cx from "classnames";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import useControlled from "../../hooks/useControlled";

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
  onSearch,
  onChange
}: SearchProps) => {
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

export default Search;
