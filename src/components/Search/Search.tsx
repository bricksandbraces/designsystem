/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import useControlled from "../../hooks/useControlled";
import Badge, { BadgeColor } from "../Badge/Badge";
import SearchResultItem, { SearchResultItemProps } from "./SearchResultItem";
import SearchRecentItem, { SearchRecentItemProps } from "./SearchRecentItem";
import SearchInput from "./SearchInput";
import SearchContainer from "./SeachContainer";

type SearchBadgeItem = {
  /**
   * Search Badge Item label
   */
  label: string;

  color?: BadgeColor;

  onClick?: React.MouseEventHandler;
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
   * Default Value
   */
  defaultValue?: string;

  /**
   * Clear Button Label
   */
  clearLabel?: string;

  /**
   * Submit Button Label
   */
  submitLabel?: string;

  /**
   * Search Results
   */
  results?: SearchResultItemProps[];

  /**
   * Search Recent
   */
  recents?: SearchRecentItemProps[];

  /**
   * Search Badges
   */
  badges?: SearchBadgeItem[];

  /**
   * OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  onClick?: React.MouseEventHandler;

  /**
   * onSearch Function. Null if clicked on a badge without href but with onClick
   */
  onSubmit?: (submittedValue: string | null, event: any) => void;

  open?: boolean;
  defaultOpen?: boolean;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;

  focusedItemIndex?: number;
  defaultFocusedItemIndex?: number;
  onItemFocusChange?: (newFocusedItemIndex: number) => void;
};

const Search = ({
  id,
  value,
  defaultValue,
  onChange,

  open,
  defaultOpen,
  onFocus,
  onBlur,
  onClick,

  clearLabel = "Clear search results",
  submitLabel = "Go!",
  label = "Search",
  size = "default",
  placeholder = "Search",

  focusedItemIndex,
  defaultFocusedItemIndex,
  onItemFocusChange,

  results,
  recents,
  badges,
  onSubmit
}: SearchProps) => {
  // |- - textValue
  const valueControlled = useControlled(value);
  const [textValue, setTextValue] = useState<string>(
    (valueControlled ? value : defaultValue) ?? ""
  );
  useEffect(() => {
    if (valueControlled) {
      setTextValue(value ?? "");
    }
  }, [value]);

  // |- - containerOpen
  const openControlled = useControlled(open);
  const [containerOpen, setContainerOpen] = useState<boolean>(
    (openControlled ? open : defaultOpen) ?? false
  );
  useEffect(() => {
    if (openControlled) {
      setContainerOpen(open ?? false);
    }
  }, [open]);

  // |- - focusedIndex
  const focusControlled = useControlled(focusedItemIndex);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(
    (focusControlled ? focusedItemIndex : defaultFocusedItemIndex) ?? null
  );
  useEffect(() => {
    if (focusControlled) {
      setFocusedIndex(focusedItemIndex ?? null);
    }
  }, [focusedItemIndex]);

  const overallArray = [
    ...(badges ?? []),
    ...(recents ?? []),
    ...(results ?? [])
  ] as {
    label?: string;
    href?: string;
    onClick?: (event: React.KeyboardEvent) => void;
  }[];
  const badgesLength = badges?.length ?? 0;
  const recentsLength = recents?.length ?? 0;
  const focusedItem = focusedIndex != null ? overallArray[focusedIndex] : null;

  const updateTextForFocusedItemIndex = (newFocusedIndex: number | null) => {
    if (!focusedItem?.onClick) {
      setTextValue(focusedItem?.label ?? "");
    }
    setFocusedIndex(newFocusedIndex);
  };

  const handleVerticalKeyboardNavigation: React.KeyboardEventHandler = (
    event
  ) => {
    const navigation = event.key === "ArrowUp" || event.key === "ArrowDown";
    const up = event.key === "ArrowUp";
    if (navigation) {
      event.preventDefault();
      setContainerOpen(true);

      if (!focusControlled) {
        let newFocusedIndex;
        if (focusedIndex == null) {
          newFocusedIndex = up ? overallArray.length - 1 : 0;
        } else if (up) {
          newFocusedIndex =
            focusedIndex - 1 < 0 ? overallArray.length - 1 : focusedIndex - 1;
        } else {
          newFocusedIndex =
            focusedIndex + 1 >= overallArray.length ? 0 : focusedIndex + 1;
        }

        updateTextForFocusedItemIndex(newFocusedIndex);

        onItemFocusChange?.(newFocusedIndex);
      }
    } else if (event.key === "Enter") {
      setContainerOpen(false);

      // if an item is focused and enter is pressed the label should be used as textValue. Exception for buttons
      if (focusedItemIndex != null) {
        if (!focusedItem?.onClick) {
          setTextValue(focusedItem?.label ?? "");
        }
        setFocusedIndex(null);
      }

      onSubmit?.(textValue, event);
    }
  };

  return (
    <SearchContainer open={containerOpen}>
      <SearchInput
        id={id}
        value={textValue}
        clearLabel={clearLabel}
        submitLabel={submitLabel}
        onClickInput={(event) => {
          setContainerOpen(true);
          onClick?.(event);
        }}
        onFocus={onFocus}
        onBlur={(event) => {
          setContainerOpen(false);
          onBlur?.(event);
        }}
        onChange={(event) => {
          setContainerOpen(true);
          if (!valueControlled) {
            setTextValue(event.target.value);
          }
          onChange?.(event);
        }}
        onKeyDown={handleVerticalKeyboardNavigation}
        onSubmit={onSubmit}
        placeholder={placeholder}
        size={size}
        label={label}
      />
      <div className="search--box-content">
        <div className="search--box-content__badges">
          {badges?.map((item, i) => {
            // todo: handle artificial focus state onHover and render selection
            return (
              <Badge
                key={i}
                onHover={() => {
                  updateTextForFocusedItemIndex(i);
                }}
                tabIndex={-1}
                onClick={(event) => {
                  if (item.onClick) {
                    item.onClick(event);
                  }
                }}
                colorType={item.color ?? "warm-gray"}
              >
                {item.label}
              </Badge>
            );
          })}
        </div>
        <div className="search--box-content__recent">
          {recents?.map((item, i) => {
            // todo: handle artificial focus state onHover and render selection
            return (
              <SearchRecentItem
                key={i}
                onHover={() => {
                  updateTextForFocusedItemIndex(badgesLength + i);
                }}
                label={item.label}
                href={item.href}
              />
            );
          })}
        </div>
        <div className="search--box-content__results">
          {results?.map((item, i) => {
            // todo: handle artificial focus state onHover and render selection
            return (
              <SearchResultItem
                key={i}
                onHover={() => {
                  updateTextForFocusedItemIndex(
                    badgesLength + recentsLength + i
                  );
                }}
                label={item.label}
                href={item.href}
              />
            );
          })}
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;
