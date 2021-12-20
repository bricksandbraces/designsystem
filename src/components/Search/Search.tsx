import React from "react";
import cx from "classnames";
import {
  useControlledValue,
  useControlledInput
} from "../../hooks/useControlled";
import { BadgeColor } from "../Badge/Badge";
import SearchListItem, {
  SearchListItemProps,
  SearchListItemType
} from "./SearchListItem";
import SearchInput from "./SearchInput";
import SearchContainer from "./SeachContainer";
import Button from "../Button/Button";
import { idfy } from "../../helpers/arrayUtilities";
import { prefix } from "../../settings";
import mergeRefs from "react-merge-refs";

export type SearchBadgeItem = {
  /**
   * SearchBadgeItem Label
   */
  label: string;

  /**
   * SearchBadgeItem Color
   */
  color?: BadgeColor;

  /**
   * SearchBageItem OnClick
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type SearchProps = {
  /**
   * Search Size
   */
  size?: "large" | "small" | "default";

  /**
   * Search ID Mandatory
   */
  id: string;

  /**
   * Search Label
   */
  label: string;

  /**
   * Search Placeholder
   */
  placeholder?: string;

  /**
   * Search Value
   */
  value?: string;

  /**
   * Search Default Value
   */
  defaultValue?: string;

  /**
   * Search Clear Button Label
   */
  clearLabel?: string;

  /**
   * Search Submit Button Label
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
   * Search OnChange Function
   */
  onChange?: (
    newValue?: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * Search OnClick Function
   */
  onClickInput?: React.MouseEventHandler<HTMLInputElement>;

  /**
   * Search OnKeyDown Function
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /**
   * Search OnSubmit Function. Null if clicked on a badge without href but with onClick
   */
  onSubmit?: (
    submittedValue: string | null,
    event:
      | React.MouseEvent<
          HTMLButtonElement | HTMLAnchorElement,
          globalThis.MouseEvent
        >
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;

  /**
   * Search Open State (Controlled)
   */
  open?: boolean;

  /**
   * Search Light
   */
  light?: boolean;

  /**
   * Search Open State (Uncontrolled)
   */
  defaultOpen?: boolean;

  /**
   * Search OnOpenChange
   */
  onOpenChange?: (newOpen: boolean) => void;

  /**
   * Search OnFocus Function
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Search OnBlur Function
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Search FocusItemIndex : A focus state for the list elements that combines selection via hover and keyboard events.
   * Separate to the classic DOM focus events. (Controlled)
   */
  focusedItemIndex?: number;

  /**
   * Search DefaultFocusedItemIndex : A focus state for the list elements that combines selection via hover and keyboard events.
   * Separate to the classic DOM focus events. (Uncontrolled)
   */
  defaultFocusedItemIndex?: number;

  /**
   * Search OnItemsFocusChange Called when the Item Focus Changes (Separate to the classic DOM focus events, See focusedItemIndex and defaultFocusedItemIndex).
   */
  onItemFocusChange?: (newFocusedItemIndex: number | null) => void;
};

const Search = (
  {
    id,
    value,
    defaultValue,
    onChange,

    light,

    open,
    defaultOpen,
    onOpenChange,

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
    onSubmit,
    onFocus,
    onBlur,
    onClickInput,
    onKeyDown
  }: SearchProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const indexedBadges = idfy(badges);

  // |- - textValue
  const [inputRef, currentValue, handleValueChange, setValueManually] =
    useControlledInput(value, defaultValue, onChange);

  // |- - containerOpen
  const [containerOpen, performOpenChange] = useControlledValue<boolean>(
    open,
    defaultOpen,
    onOpenChange,
    false
  );

  // |- - focusedIndex
  const [focusedIndex, performFocusChange] = useControlledValue<number | null>(
    focusedItemIndex,
    defaultFocusedItemIndex,
    onItemFocusChange,
    null
  );

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

  const updateFocusIndexAndTextValue = (newFocusedIndex: number) => {
    const newFocusedItem =
      newFocusedIndex != null ? overallArray[newFocusedIndex] : null;
    const newValue = newFocusedItem?.label ?? "";

    // update text
    setValueManually(newValue);
    onChange?.(newValue);

    // update focus
    performFocusChange(newFocusedIndex);
  };

  const handleKeyboardNavigation: React.KeyboardEventHandler<
    HTMLInputElement
  > = (event) => {
    const navigation = event.key === "ArrowUp" || event.key === "ArrowDown";
    const up = event.key === "ArrowUp";
    if (navigation) {
      event.preventDefault();
      performOpenChange(true);

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
    } else if (event.key === "Enter" && !event.repeat) {
      performOpenChange(false);

      if (focusedItemIndex != null) {
        const newValue = focusedItem?.label ?? "";
        setValueManually(newValue);
        onChange?.(newValue);
        performFocusChange(null);
      }

      onSubmit?.(currentValue ?? "", event);
    } else if (event.key === "Escape") {
      performOpenChange(false);
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
    <>
      <SearchInput
        id={id}
        light={light}
        ref={mergeRefs([inputRef, ref])}
        value={value}
        defaultValue={defaultValue}
        clearLabel={clearLabel}
        submitLabel={submitLabel}
        onClickInput={(event) => {
          performOpenChange(true);
          performFocusChange(null);
          onClickInput?.(event);
        }}
        onFocus={onFocus}
        onBlur={(event) => {
          // todo: only close the container if the blur was on the webpage (not outside the window)
          setTimeout(() => {
            performOpenChange(false);
          }, 250);
          onBlur?.(event);
        }}
        onChange={handleValueChange(undefined, () => {
          // reset the focus on every change
          performFocusChange(null);
          performOpenChange(true);
        })}
        onKeyDown={(event) => {
          handleKeyboardNavigation(event);
          onKeyDown?.(event);
        }}
        placeholder={placeholder}
        size={size}
        label={label}
      />
      <SearchContainer open={containerOpen}>
        <div className={`${prefix}--search-box__content`}>
          <div className={`${prefix}--search-box__content-badges`}>
            {indexedBadges?.map((item, i) => {
              return (
                <Button
                  key={item.id}
                  className={cx({
                    [`${prefix}--search-box__content-badges--manual-hover`]:
                      i === focusedIndex
                  })}
                  kind="secondary"
                  onMouseEnter={() => {
                    performFocusChange(i);
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
          <div className={`${prefix}--search-box__content-items`}>
            {searchListItems.map((item, i) => {
              const absIndex = (indexedBadges?.length ?? 0) + i;
              return (
                <SearchListItem
                  type={item.type}
                  key={item.id}
                  onMouseEnter={() => {
                    performFocusChange(absIndex);
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
    </>
  );
};

export default React.forwardRef(Search);
