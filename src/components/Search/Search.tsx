import React, { useEffect, useState } from "react";
import cx from "classnames";
import useControlled from "../../hooks/useControlled";
import { BadgeColor } from "../Badge/Badge";
import SearchListItem, {
  SearchListItemProps,
  SearchListItemType
} from "./SearchListItem";
import SearchInput from "./SearchInput";
import SearchContainer from "./SeachContainer";
import Button from "../Button/Button";
import { idfy } from "../../helpers/arrayUtilities";

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
  results?: Omit<SearchListItemProps, "type">[];

  /**
   * Search Recent
   */
  recents?: Omit<SearchListItemProps, "type">[];

  /**
   * Search Badges
   */
  badges?: SearchBadgeItem[];

  /**
   * OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * onSearch Function. Null if clicked on a badge without href but with onClick
   */
  onSubmit?: (submittedValue: string | null, event: any) => void;

  open?: boolean;
  defaultOpen?: boolean;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;

  /** A focus state for the list elements that combines selection via hover and keyboard events. Separate to the classic DOM focus events. */
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
  onKeyDown,

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
  const indexedBadges = idfy(badges);

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

  // Concat all search list items (Button + SearchListItem [both types]) to easily access an item via absolute index
  const overallArray = [
    ...(indexedBadges ?? []),
    ...(recents ?? []),
    ...(results ?? [])
  ] as {
    label: string;
    href?: string;
    onClick?: (event: React.KeyboardEvent) => void;
  }[];

  /** the currently focused items props */
  const focusedItem = focusedIndex != null ? overallArray[focusedIndex] : null;

  const updateFocusIndexAndTextValue = (newFocusedIndex: number | null) => {
    const newFocusedItem =
      newFocusedIndex != null ? overallArray[newFocusedIndex] : null;
    if (!valueControlled) setTextValue(newFocusedItem?.label ?? "");
    if (!focusControlled) setFocusedIndex(newFocusedIndex);
  };

  const handleVerticalKeyboardNavigation: React.KeyboardEventHandler = (
    event
  ) => {
    const navigation = event.key === "ArrowUp" || event.key === "ArrowDown";
    const up = event.key === "ArrowUp";
    if (navigation) {
      event.preventDefault();
      if (!openControlled) setContainerOpen(true);

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

        updateFocusIndexAndTextValue(newFocusedIndex);

        onItemFocusChange?.(newFocusedIndex);
      }
    } else if (event.key === "Enter") {
      if (openControlled) {
        setContainerOpen(false);
      }

      if (focusedItemIndex != null) {
        if (!valueControlled) setTextValue(focusedItem?.label ?? "");
        if (!focusControlled) setFocusedIndex(null);
      }

      onSubmit?.(textValue, event);
    }
  };

  // combine recent with result as their component is the same
  const searchListItems = idfy(
    (recents ?? [])
      .map((item) => ({ ...item, type: SearchListItemType.RECENT }))
      .concat(
        (results ?? []).map((item) => ({
          ...item,
          type: SearchListItemType.RESULT
        }))
      )
  );

  return (
    <SearchContainer open={containerOpen}>
      <SearchInput
        id={id}
        value={textValue}
        clearLabel={clearLabel}
        submitLabel={submitLabel}
        onClickInput={(event) => {
          if (!openControlled) {
            setContainerOpen(true);
          }
          if (!focusControlled) {
            setFocusedIndex(null);
          }
          onClick?.(event);
        }}
        onFocus={onFocus}
        onBlur={(event) => {
          // todo: only close the container if the blur was on the webpage (not outside the window)
          if (!openControlled) {
            setContainerOpen(false);
          }
          onBlur?.(event);
        }}
        onChange={(event) => {
          if (!openControlled) {
            setContainerOpen(true);
          }
          if (!valueControlled) {
            setTextValue(event.target.value);
          }
          // reset the focus on every change
          if (!focusControlled) {
            setFocusedIndex(null);
          }
          onChange?.(event);
        }}
        onKeyDown={(event) => {
          handleVerticalKeyboardNavigation(event);
          onKeyDown?.(event);
        }}
        onSubmit={onSubmit}
        placeholder={placeholder}
        size={size}
        label={label}
      />
      <div className="search--box-content">
        <div className="search--box-content__badges">
          {indexedBadges?.map((item, i) => {
            return (
              <Button
                key={item.id}
                className={cx({
                  "search--box-content__badges__manual-hover":
                    i === focusedIndex
                })}
                kind="secondary"
                onMouseEnter={() => {
                  setFocusedIndex(i);
                }}
                tabIndex={-1}
                size="small"
                onClick={item.onClick}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
        <div>
          {searchListItems.map((item, i) => {
            const absIndex = (indexedBadges?.length ?? 0) + i;
            return (
              <SearchListItem
                type={item.type}
                key={item.id}
                onMouseEnter={() => {
                  setFocusedIndex(absIndex);
                }}
                onClick={() => {
                  updateFocusIndexAndTextValue(absIndex);
                }}
                label={item.label}
                href={item.href}
                manuallyHovered={absIndex === focusedIndex}
              />
            );
          })}
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;
