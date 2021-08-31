import React, { useRef, useState } from "react";
import cx from "classnames";
import {
  IconAlertCircle,
  IconAlertTriangle,
  IconChevronDown
} from "@tabler/icons";
import Typography from "../Typography/Typography";
import { findNextItem } from "../../helpers/arrayUtilities";

type DropdownItem = {
  /**
   * Dropdown ID
   */
  id?: string;

  /**
   * Dropdown Value
   */
  value?: string;

  /**
   * Checkbox Label
   */
  text?: string;

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
};

const Dropdown = ({
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
  const ulRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>();
  const [selectedText, setSelectedText] = useState<string>();

  const focusListItem = (index: number) => {
    (ulRef.current?.children[index].children[0] as HTMLDivElement).focus();
  };

  const handleKeyPressOnItem = (key: string, item: DropdownItem, i: number) => {
    if (key === "ArrowUp" || key === "ArrowDown") {
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
      setSelectedValue(item.value);
      setSelectedText(item.text);
      btnRef.current?.focus();
    }
  };

  return (
    <>
      <Typography type="span" token="body-small" className="dropdown--label">
        {label}
      </Typography>
      <button
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
      <ul
        role="menu"
        className={cx("dropdown--menu", { "dropdown--menu-open": open })}
        aria-hidden={!open}
        ref={ulRef}
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
                className="dropdown--menu-item-interactible"
                tabIndex={item.disabled || !open ? -1 : 0}
                onClick={() => {
                  setSelectedValue(item.value);
                  setOpen(false);
                  setSelectedText(item.text);
                }}
                onKeyDown={(event: React.KeyboardEvent) =>
                  handleKeyPressOnItem(event.key, item, i)
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
    </>
  );
};

export default Dropdown;
