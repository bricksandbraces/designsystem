import React, { ChangeEvent, useEffect, useState } from "react";
import { IconSearch, IconX } from "@tabler/icons";
import cx from "classnames";
import Button from "../Button/Button";
import useControlled from "../../hooks/useControlled";
import { filterForKeys } from "../../helpers/keyboardUtilities";

type SearchInputProps = {
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
   * Clear Button Label
   */
  clearLabel?: string;

  /**
   * Default Value (Uncontrolled)
   */
  defaultValue?: string;

  /**
   * Value (Controlled)
   */
  value?: string;

  /**
   * OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * Defaults to true. If false, the submit button is being dropped.
   */
  withSubmit?: boolean;

  /**
   * Submit Button Label
   */
  submitLabel?: string;

  /**
   * Submit
   */
  submitIcon?: React.ReactNode;

  /**
   * onSearch Function
   */
  onSubmit?: (
    submittedValue: string,
    event:
      | React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
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
        onKeyDown={filterForKeys(["Enter"], (event) =>
          onSubmit?.(textValue, event)
        )}
        className="search--input"
        id={id}
        placeholder={placeholder}
        value={textValue}
      />
      <div className="search--buttons">
        {!!textValue && (
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
        {withSubmit && (
          <Button
            onClick={(event) => onSubmit?.(textValue, event)}
            iconOnly={!submitLabel}
            renderIcon={submitIcon}
            kind="primary"
            size={size}
            className="search--go"
            type="button"
            aria-label={submitLabel}
          >
            {submitLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
