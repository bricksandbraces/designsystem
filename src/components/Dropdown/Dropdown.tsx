import React, { useEffect, useRef, useState } from "react";
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

  /**
   * Controlled index of the selected dropdown item
   */
  selectedIndex?: number;

  /**
   * Uncontrolled default index of the selected dropdown item
   */
  defaultSelectedIndex?: number;

  /**
   * OnChange Function for listeners or value change requests in controlled mode
   */
  onChange?: (newSelectedIndex: number | null) => void;
};

const Dropdown = ({
  selectedIndex,
  defaultSelectedIndex,
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
  const controlled = useControlled(selectedIndex);

  const ulRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(
    // eslint-disable-next-line no-nested-ternary
    selectedIndex != null || defaultSelectedIndex != null
      ? controlled
        ? items[selectedIndex as number]
        : items[defaultSelectedIndex as number]
      : null
  );
  const [open, setOpen] = useState(false);

  const selectIndex = (index: number | null) => {
    if (!controlled) {
      setSelectedItem(index == null ? null : items[index]);
    }
    onChange?.(index);
  };

  useEffect(() => {
    if (controlled) {
      setSelectedItem(selectedIndex == null ? null : items[selectedIndex]);
    }
  }, [selectedIndex]);

  const focusListItem = (index: number) => {
    (ulRef.current?.children[index].children[0] as HTMLDivElement).focus();
  };

  const handleKeyPressOnItem = (
    event: React.KeyboardEvent,
    key: string,
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
      selectIndex(i);
      btnRef.current?.focus();
    }
  };

  return (
    <>
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
          title={selectedItem?.text}
        >
          {selectedItem == null ? title : selectedItem?.text}
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
                  "dropdown--menu-item__selected": selectedItem === item.value
                })}
                id={item.id}
                value={item.value}
                title={item.text}
              >
                <div
                  role="button"
                  className="dropdown--menu-item__interactible"
                  tabIndex={item.disabled || !open ? -1 : 0}
                  onClick={() => {
                    selectIndex(i);
                    setOpen(false);
                  }}
                  onKeyDown={(event: React.KeyboardEvent) =>
                    handleKeyPressOnItem(event, event.key, i)
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
    </>
  );
};

export default Dropdown;
