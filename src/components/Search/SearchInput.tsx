import React, { ChangeEvent, useEffect, useState } from "react";
import { IconSearch, IconX } from "@tabler/icons";
import cx from "classnames";
import Button from "../Button/Button";
import useControlled from "../../hooks/useControlled";
import IconOnlyButton from "../Button/IconOnlyButton";
import { prefix } from "../../settings";

type SearchInputProps = {
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
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

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
  submitIcon?: React.ReactNode;

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
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onClickInput?: React.MouseEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};

const SearchInput = ({
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
  onSubmit,
  onClickInput,
  onFocus,
  onBlur,
  onChange,
  onKeyDown
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
      className={cx(`${prefix}--search ${prefix}--search-${size}`)}
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
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClickInput}
        autoComplete="off"
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (!controlled) {
            setTextValue(event.target.value);
          }
          onChange?.(event);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSubmit?.(textValue, event);
          }
          onKeyDown?.(event);
        }}
        className={cx(`${prefix}--search-input`)}
        id={id}
        placeholder={placeholder}
        value={textValue}
      />
      <div className={cx(`${prefix}--search-buttons`)}>
        {!!textValue && (
          <IconOnlyButton
            onClick={() => {
              setTextValue("");
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
              onClick={(event) => onSubmit?.(textValue, event)}
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
              onClick={(event) => onSubmit?.(textValue, event)}
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
};

export default SearchInput;
