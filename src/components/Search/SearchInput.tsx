import { IconSearch, IconX } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import mergeRefs from "react-merge-refs";
import { useControlledInput } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { Button } from "../Button/Button";
import { IconOnlyButton } from "../Button/IconOnlyButton";

export type SearchInputProps = {
  /**
   * SearchInput Size
   */
  size?: "large" | "small" | "default";

  /**
   * SearchInput Id
   */
  id: string;

  /**
   * SearchInput Label
   */
  label: string;

  /**
   * SearchInput Placeholder
   */
  placeholder?: string;

  /**
   * SearchInput Light
   */
  light?: boolean;

  /**
   * SearchInput Clear Button Label
   */
  clearLabel?: string;

  /**
   * SearchInput Default Value (Uncontrolled)
   */
  defaultValue?: string;

  /**
   * SearchInput Value (Controlled)
   */
  value?: string;

  /**
   * SearchInput OnChange Function
   */
  onChange?: (
    newValue: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * SearchInput Defaults to true. If false, the submit button is being dropped.
   */
  withSubmit?: boolean;

  /**
   * SearchInput Submit Button Label
   */
  submitLabel?: string;

  /**
   * SearchInput Submit
   */
  submitIcon?: React.ReactElement;

  /**
   * SearchInput onSearch Function
   */
  onSubmit?: (
    submittedValue: string,
    event:
      | React.MouseEvent<
          HTMLButtonElement | HTMLAnchorElement,
          globalThis.MouseEvent
        >
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;

  /**
   * SearchInput OnFocus
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * SearchInput OnBlur
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * SearchInput OnClickInput
   */
  onClickInput?: React.MouseEventHandler<HTMLInputElement>;

  /**
   * SearchInput OnKeyDown
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};

export const SearchInput = React.forwardRef(function SearchInput(
  {
    id,
    value,
    clearLabel = "Clear search results",

    label = "Search",
    size = "default",
    placeholder = "Search",
    withSubmit = true,
    submitLabel = "Go!",
    submitIcon = <IconSearch />,
    defaultValue,
    light,
    onSubmit,
    onClickInput,
    onFocus,
    onBlur,
    onChange,
    onKeyDown
  }: SearchInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const [inputRef, currentValue, handleChange, setValueManually] =
    useControlledInput(
      value,
      defaultValue,
      onChange &&
        ((newValue, event) => {
          onChange(
            newValue ?? "",
            event as React.ChangeEvent<HTMLInputElement>
          );
        })
    );
  return (
    <div
      role="search"
      aria-labelledby={`${id}-search`}
      className={cx(`${prefix}--search ${prefix}--search-${size}`, {
        [`${prefix}--search-light`]: light
      })}
    >
      <IconSearch className={cx(`${prefix}--search-icon`)} />
      <label
        id={`${id}-search`}
        htmlFor={id}
        className={cx(`${prefix}--search-label`)}
      >
        {label}
      </label>
      <input
        role="searchbox"
        ref={mergeRefs([inputRef, ref])}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClickInput}
        autoComplete="off"
        type="text"
        onChange={handleChange()}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.repeat) {
            onSubmit?.(currentValue ?? "", event);
          }
          onKeyDown?.(event);
        }}
        className={cx(`${prefix}--search-input`)}
        id={id}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
      />
      <div className={cx(`${prefix}--search-buttons`)}>
        {!!currentValue && (
          <IconOnlyButton
            onClick={() => {
              const newValue = "";
              setValueManually(newValue);
              onChange?.(newValue);
            }}
            kind="ghost"
            size={size}
            icon={<IconX />}
            className={cx(`${prefix}--search-close`)}
            type="button"
            aria-label={clearLabel}
          />
        )}
        {withSubmit &&
          (submitLabel ? (
            <Button
              onClick={(event) => onSubmit?.(currentValue ?? "", event)}
              icon={submitIcon}
              kind="primary"
              size={size}
              className={cx(`${prefix}--search-go`)}
              type="button"
              aria-label={submitLabel}
            >
              {submitLabel}
            </Button>
          ) : (
            <IconOnlyButton
              onClick={(event) => onSubmit?.(currentValue ?? "", event)}
              kind="primary"
              size={size}
              icon={<IconSearch />}
              className={cx(`${prefix}--search-go`)}
              type="button"
              aria-label="Search"
            />
          ))}
      </div>
    </div>
  );
});
