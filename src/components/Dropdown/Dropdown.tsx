import React, { useState } from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";

type DropDownItem = {
  /**
   * Dropdown ID
   */
  id?: string;

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
   * Dropdown items
   */
  items: DropDownItem[];
};

const Dropdown = ({ size, label, className, items }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={cx(
          "dropdown",
          {
            "dropdown--large": size === "large",
            "dropdown--small": size === "small",
            "dropdown--default": size === "default"
          },
          className
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {label}
        <IconChevronDown
          size={16}
          className={cx("dropdown--icon", { "dropdown--icon-open": open })}
        />
      </button>
      <div className={cx("dropdown--menu", { "dropdown--menu-open": open })}>
        {items.map((item, i) => {
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={cx("dropdown--menu-item", {
                "dropdown--large": size === "large",
                "dropdown--small": size === "small",
                "dropdown--default": size === "default",
                "dropdown--menu-item__selected": item.selected
              })}
              id={item.id}
            >
              <div className="dropdown--menu-item__text">
                <span title={item.text}>
                  {item.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dropdown;
