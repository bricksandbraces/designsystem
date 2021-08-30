import React, { useState } from "react";
import cx from "classnames";
import {
  IconAlertCircle,
  IconAlertTriangle,
  IconChevronDown
} from "@tabler/icons";
import Typography from "../Typography/Typography";

type DropDownItem = {
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
   * Selected item
   */
  selected?: boolean;
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
  items: DropDownItem[];
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
  warningText
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  return (
    <>
      <Typography type="span" token="body-small" className="dropdown--label">
        {label}
      </Typography>
      <button
        aria-expanded={open}
        className={cx(
          "dropdown",
          {
            "dropdown--large": size === "large",
            "dropdown--small": size === "small",
            "dropdown--default": size === "default",
            "drodown--error": (error || errorText) && !(warning || warningText),
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
          {selectedValue === null ? title : selectedText}
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
        aria-hidden={open}
      >
        {items.map((item, i) => {
          return (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={cx("dropdown--menu-item", {
                "dropdown--large": size === "large",
                "dropdown--small": size === "small",
                "dropdown--default": size === "default",
                "dropdown--menu-item__selected": selectedValue === item.value
              })}
              id={item.id}
              value={item.value}
              title={item.text}
              onClick={() => {
                setSelectedValue(item.value),
                  setOpen(false),
                  setSelectedText(item.text);
              }}
            >
              <div className="dropdown--menu-item__text">
                <span title={item.text}>{item.text}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
