import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import cx from "classnames";
import {
  IconAlertCircle,
  IconAlertTriangle,
  IconChevronDown
} from "@tabler/icons";
import Typography from "../Typography/Typography";
import { findNextItem } from "../../helpers/arrayUtilities";
import useControlled from "../../hooks/useControlled";
import OutsideClickListener from "../util/OutsideClickListener/OutsideClickListener";
import FormLabel from "../FormLabel/FormLabel";

type DropdownItem = {
  /**
   * Dropdown ID
   */
  id?: string;

  /**
   * Dropdown Value
   */
  value: string;

  /**
   * Checkbox Label
   */
  text: string;

  /**
   * Disabled item
   */
  disabled?: boolean;
};

type DropdownProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * Dropdown size
   */
  size?: "large" | "small" | "default";

  /**
   * Dropdown label
   */
  label?: string;

  /**
   * Disabled dropdown
   */
  disabled?: boolean;

  /**
   * Error
   */
  error?: boolean;
  errorText?: string;

  /**
   * Warning
   */
  warning?: boolean;
  warningText?: string;

  /**
   * Dropdown title
   */
  title: string;

  /**
   * Dropdown items
   */
  items: DropdownItem[];

  /**
   * Controlled value of the selected dropdown item
   */
  value?: string | null;

  /**
   * Uncontrolled default value of the selected dropdown item
   */
  defaultValue?: string | null;

  /**
   * OnChange Function for listeners or value change requests in controlled mode
   */
  onChange?: (
    newValue: string | null,
    event:
      | React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;
};

const Dropdown = ({
  value,
  defaultValue,
  onChange,
  size,
  label,
  className,
  title,
  items,
  error,
  errorText,
  warning,
  warningText,
  disabled
}: DropdownProps) => {
  const controlled = useControlled(value);

  const ulRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [selectedValue, setSelectedValue] = useState<string | null>(
    (controlled ? value : defaultValue) ?? null
  );
  const selectedText =
    items.filter((el) => el.value === selectedValue)[0]?.text ?? "";
  const [open, setOpen] = useState(false);

  const selectValue = (
    newValue: string | null,
    event:
      | React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (!controlled) {
      setSelectedValue(newValue);
    }
    onChange?.(newValue, event);
  };

  useEffect(() => {
    if (controlled) {
      setSelectedValue(value ?? null);
    }
  }, [value]);

  const focusListItem = (index: number) => {
    (ulRef.current?.children[index].children[0] as HTMLDivElement).focus();
  };

  const handleKeyPressOnItem = (
    event: React.KeyboardEvent<HTMLDivElement>,
    key: string,
    valueToSelect: string,
    i: number
  ) => {
    if (key === "ArrowUp" || key === "ArrowDown") {
      event.preventDefault();
      // find the next item that is not disabled. Start from the beginning again.
      const { index: newIndex } = findNextItem(
        items,
        (it) => !it.disabled,
        i,
        key === "ArrowDown"
      );
      if (newIndex != null) {
        focusListItem(newIndex);
      }
    } else if (key === "Escape") {
      setOpen(false);
      btnRef.current?.focus();
    } else if (key === " " || key === "Enter") {
      selectValue(valueToSelect, event);
      btnRef.current?.focus();
    }
  };

  return (
    <div className="dropdown--wrapper">
      <FormLabel htmlFor="dropdown-toggle-button">{label}</FormLabel>
      <button
        id="dropdown-toggle-button"
        disabled={disabled}
        ref={btnRef}
        aria-expanded={open}
        className={cx(
          `dropdown dropdown--${size}`,
          {
            "drodown--error": error || errorText,
            "dropdown--warning":
              !(error || errorText) && (warning || warningText)
          },
          className
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Typography
          type="span"
          token="body-small"
          className="dropdown--title"
          title={selectedText}
        >
          {selectedValue == null ? title : selectedText}
        </Typography>
        <IconChevronDown
          size={16}
          className={cx("dropdown--icon", { "dropdown--icon-open": open })}
        />
      </button>
      {errorText && !warningText && (
        <div className="dropdown--error-text">
          <IconAlertCircle size={16} />

          {errorText}
        </div>
      )}
      {warningText && !errorText && (
        <div className="dropdown--warning-text">
          <IconAlertTriangle size={16} />

          {warningText}
        </div>
      )}
      <OutsideClickListener
        onClickOutside={() => {
          setOpen(false);
        }}
        disabled={!open}
        ref={ulRef}
      >
        <ul
          role="menu"
          className={cx("dropdown--menu", { "dropdown--menu-open": open })}
          aria-hidden={!open}
        >
          {items.map((item, i) => {
            return (
              <li
                key={item.value}
                className={cx(`dropdown--menu-item dropdown--${size}`, {
                  "dropdown--menu-item__disabled": item.disabled,
                  "dropdown--menu-item__selected": selectedValue === item.value
                })}
                id={item.id}
                value={item.value}
                title={item.text}
              >
                <div
                  role="button"
                  className="dropdown--menu-item__interactible"
                  tabIndex={item.disabled || !open ? -1 : 0}
                  onClick={(event) => {
                    selectValue(item.value, event);
                    setOpen(false);
                  }}
                  onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
                    handleKeyPressOnItem(event, event.key, item.value, i)
                  }
                >
                  <div className="dropdown--menu-item__text" role="button">
                    <span title={item.text}>{item.text}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </OutsideClickListener>
    </div>
  );
};

export default Dropdown;
